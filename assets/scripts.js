/* =========================================================
   API SETTINGS
   Paste the API address you were given, and your key if it needs one.
   ========================================================= */
const API_URL = "https://anurella.github.io/json/planet.json";
const API_KEY = ""; // leave empty if the API needs no key

const JUPITER_MASS_E24_KG = 1898; // the API gives mass in Jupiter masses
const AU_MILLION_KM = 149.6;

let planetListPromise = null;

/* Download the planet list once, then reuse it for every search. */
function loadPlanets() {
  if (!planetListPromise) {
    const options = API_KEY ? { headers: { "X-Api-Key": API_KEY } } : {};

    planetListPromise = fetch(API_URL, options)
      .then((response) => {
        if (!response.ok) throw new Error(`API error ${response.status}`);
        return response.json();
      })
      .catch((error) => {
        planetListPromise = null; // allow a retry on the next search
        throw error;
      });
  }
  return planetListPromise;
}

/* Find one planet by name. Returns the API object, or null if not found. */
async function fetchPlanet(name) {
  const planets = await loadPlanets();
  const key = name.trim().toLowerCase();
  return planets.find((p) => p.name.toLowerCase() === key) || null;
}

/* Turn the API's fields into the display strings the card uses. */
function normalize(api) {
  const has = (v) => v !== undefined && v !== null;
  const fmt = (n, digits = 2) =>
    Number(n).toLocaleString(undefined, { maximumFractionDigits: digits });

  let period = "N/A";
  if (has(api.period)) {
    period =
      api.period >= 730
        ? `${fmt(api.period / 365.25, 1)} years`
        : `${fmt(api.period)} days`;
  }

  return {
    name: api.name,
    type: api.type || "Planet",
    description: api.description || "No description is available.",
    image: api.image || "",
    gravity: has(api.gravity) ? `${api.gravity} m/s²` : "N/A",
    mass: has(api.mass)
      ? Number((api.mass * JUPITER_MASS_E24_KG).toPrecision(3)).toLocaleString()
      : "N/A",
    period,
    temperature: has(api.temperature) ? `${fmt(api.temperature, 0)} K` : "N/A",
    orbit: has(api.distanceFromSun)
      ? `${Number((api.distanceFromSun / AU_MILLION_KM).toPrecision(3))} AU`
      : "N/A",
    diameter: has(api.diameter) ? `${fmt(api.diameter, 0)} km` : "N/A",
    distance: has(api.distanceFromSun)
      ? `${fmt(api.distanceFromSun, 1)} million km`
      : "N/A",
  };
}

function renderActivePlanet(planet) {
  if (!planet) return;

  document.getElementById("planet-name").textContent = planet.name;
  document.querySelector(".planet-type").textContent = planet.type;
  document.getElementById("planet-description").textContent = planet.description;

  const image = document.getElementById("active-planet-img");

  image.onerror = () => {
    image.onerror = null;
    image.removeAttribute("src");
    image.alt = `${planet.name} image unavailable.`;
    image.classList.add("image-unavailable");
  };

  image.classList.remove("image-unavailable");
  image.alt = planet.name;

  if (planet.image) {
    image.src = planet.image;
  } else {
    image.removeAttribute("src");
    image.alt = `${planet.name} (no picture available)`;
    image.classList.add("image-unavailable");
  }

  document.getElementById("planet-gravity").textContent = planet.gravity;
  document.getElementById("planet-mass").textContent = planet.mass;
  document.getElementById("planet-period").textContent = planet.period;
  document.getElementById("planet-temp").textContent = planet.temperature;
  document.getElementById("planet-orbit").textContent = planet.orbit;
  document.getElementById("planet-diameter").textContent = planet.diameter;
  document.getElementById("planet-distance").textContent = planet.distance;
}

/* =========================================================
   THEME (light / dark)  - unchanged
   ========================================================= */
const THEME_KEY = "planet-theme";
const THEME_COLORS = { light: "#f6f8ff", dark: "#141d2f" };

function getSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "dark" || saved === "light" ? saved : null;
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {}
}

function getSystemTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const themeButton = document.getElementById("theme-btn");
  const themeLabel = document.getElementById("theme-label");
  const metaColor = document.querySelector('meta[name="theme-color"]');

  document.documentElement.setAttribute("data-theme", theme);

  if (metaColor) metaColor.setAttribute("content", THEME_COLORS[theme]);
  if (themeLabel) themeLabel.textContent = isDark ? "LIGHT" : "DARK";
  if (themeButton) themeButton.setAttribute("aria-pressed", String(isDark));
}

function initializeTheme() {
  const themeButton = document.getElementById("theme-btn");

  applyTheme(
    document.documentElement.getAttribute("data-theme") ||
      getSavedTheme() ||
      getSystemTheme(),
  );

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      saveTheme(next);
    });
  }

  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event) => {
      if (!getSavedTheme()) applyTheme(event.matches ? "dark" : "light");
    };

    if (media.addEventListener) {
      media.addEventListener("change", onSystemChange);
    } else if (media.addListener) {
      media.addListener(onSystemChange);
    }
  }
}

/* =========================================================
   PLANET EXPLORER
   ========================================================= */
function initializePlanetExplorer() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("planet-search");
  const searchStatus = document.getElementById("search-status");
  const searchResults = document.getElementById("search-results");
  const noResults = document.getElementById("no-results");
  const noResultsTitle = noResults.querySelector("h2");
  const noResultsText = noResults.querySelector("p");
  const planetCard = document.getElementById("planet-card");
  const factsSection = document.getElementById("planet-facts-section");
  const searchBtn = searchForm.querySelector(".search-btn");

  let requestId = 0; // ignore out-of-date responses

  initializeTheme();

  function showPlanet() {
    searchStatus.textContent = "";
    searchResults.hidden = true;
    noResults.hidden = true;
    planetCard.hidden = false;
    factsSection.hidden = false;
  }

  function showMessage(status, title, text) {
    searchStatus.textContent = status;
    noResultsTitle.textContent = title;
    noResultsText.textContent = text;
    searchResults.hidden = false;
    noResults.hidden = false;
    planetCard.hidden = true;
    factsSection.hidden = true;
  }

  async function searchPlanet(query) {
    const id = ++requestId;
    searchBtn.disabled = true;
    searchStatus.textContent = "Loading...";

    try {
      const apiPlanet = await fetchPlanet(query);
      if (id !== requestId) return;

      if (apiPlanet) {
        showPlanet();
        renderActivePlanet(normalize(apiPlanet));
      } else {
        showMessage(
          "No results",
          "No results found!",
          "We couldn't find any planet matching your search. Please double-check the name and try again.",
        );
      }
    } catch (error) {
      if (id !== requestId) return;
      showMessage(
        "Error",
        "Something went wrong",
        "We couldn't reach the planet service. Check your internet connection and API key, then try again.",
      );
      console.error(error);
    } finally {
      if (id === requestId) searchBtn.disabled = false;
    }
  }

  // Load Earth from the API on startup.
  searchPlanet("Earth");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) searchPlanet(query);
  });

  // Clearing the box returns to Earth (cached after the first load).
  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") searchPlanet("Earth");
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePlanetExplorer);
} else {
  initializePlanetExplorer();
}
