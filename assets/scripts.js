const planets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    category: "Terrestrial Planets",
    description: "The smallest planet, orbiting closest to the Sun.",
    image: "assets/mercury.png",
    gravity: "3.7 m/s²",
    mass: "0.330",
    period: "88 days",
    temperature: "167 K",
    orbit: "0.39 AU",
    diameter: "4,879 km",
    distance: "57.9 million km",
  },
  {
    name: "Venus",
    type: "Terrestrial",
    category: "Terrestrial Planets",
    description: "A rocky planet with a very thick, hot atmosphere.",
    image: "assets/venus.png",
    gravity: "8.87 m/s²",
    mass: "4.87",
    period: "225 days",
    temperature: "737 K",
    orbit: "0.72 AU",
    diameter: "12,104 km",
    distance: "108.2 million km",
  },
  {
    name: "Earth",
    type: "Terrestrial",
    category: "Terrestrial Planets",
    description:
      "Our home planet and the only world currently known to support life.",
    image: "assets/earth_ picture.png",
    gravity: "9.8 m/s²",
    mass: "5.97",
    period: "365.25 days",
    temperature: "288 K",
    orbit: "1 AU",
    diameter: "12,756 km",
    distance: "149.6 million km",
  },
  {
    name: "Mars",
    type: "Terrestrial",
    category: "Terrestrial Planets",
    description:
      "The Red Planet, known for its dusty surface and giant volcanoes.",
    image: "assets/mars.png",
    gravity: "3.71 m/s²",
    mass: "0.642",
    period: "687 days",
    temperature: "210 K",
    orbit: "1.52 AU",
    diameter: "6,792 km",
    distance: "227.9 million km",
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    category: "Jovian Planets",
    subCategory: "Gas Giants",
    description:
      "The largest planet in our solar system, famous for its Great Red Spot.",
    image: "assets/jupiter.png",
    gravity: "24.79 m/s²",
    mass: "1,898",
    period: "11.86 years",
    temperature: "165 K",
    orbit: "5.2 AU",
    diameter: "142,984 km",
    distance: "778.6 million km",
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    category: "Jovian Planets",
    subCategory: "Gas Giants",
    description: "A gas giant best known for its spectacular rings.",
    image: "assets/saturn.png",
    gravity: "10.44 m/s²",
    mass: "568",
    period: "29.45 years",
    temperature: "134 K",
    orbit: "9.58 AU",
    diameter: "120,536 km",
    distance: "1.43 billion km",
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    category: "Jovian Planets",
    subCategory: "Ice Giants",
    description: "An ice giant that rotates on its side.",
    image: "assets/uranus.png",
    gravity: "8.69 m/s²",
    mass: "86.8",
    period: "84 years",
    temperature: "76 K",
    orbit: "19.2 AU",
    diameter: "51,118 km",
    distance: "2.87 billion km",
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    category: "Jovian Planets",
    subCategory: "Ice Giants",
    description: "A distant blue ice giant with extremely fast winds.",
    image: "assets/neptune.png",
    gravity: "11.15 m/s²",
    mass: "102",
    period: "164.8 years",
    temperature: "72 K",
    orbit: "30.05 AU",
    diameter: "49,528 km",
    distance: "4.50 billion km",
  },
  {
    name: "Pluto",
    type: "Dwarf Planet",
    category: "Dwarf Planets",
    description: "A small icy world in the Kuiper Belt beyond Neptune.",
    image: "assets/pluto.png",
    gravity: "0.62 m/s²",
    mass: "0.0130",
    period: "248 years",
    temperature: "44 K",
    orbit: "39.5 AU",
    diameter: "2,376 km",
    distance: "5.9 billion km",
  },
];

function renderActivePlanet(planet) {
  if (!planet) return;

  document.getElementById("planet-name").textContent = planet.name;
  document.querySelector(".planet-type").textContent = planet.type;
  document.getElementById("planet-description").textContent =
    planet.description;

  const image = document.getElementById("active-planet-img");

  image.onerror = () => {
    image.onerror = null;
    image.removeAttribute("src");
    image.alt = `${planet.name} image unavailable. Check the image file path.`;
    image.classList.add("image-unavailable");
  };

  image.classList.remove("image-unavailable");
  image.alt = planet.name;
  image.src = planet.image;

  document.getElementById("planet-gravity").textContent = planet.gravity;
  document.getElementById("planet-mass").textContent = planet.mass;
  document.getElementById("planet-period").textContent = planet.period;
  document.getElementById("planet-temp").textContent = planet.temperature;
  document.getElementById("planet-orbit").textContent = planet.orbit;
  document.getElementById("planet-diameter").textContent = planet.diameter;
  document.getElementById("planet-distance").textContent = planet.distance;
}

function renderPlanetTable(planetsArray) {
  const tbody = document.querySelector(".planet-facts-table tbody");

  if (!tbody) return;

  tbody.replaceChildren();

  const categories = ["Terrestrial Planets", "Jovian Planets", "Dwarf Planets"];

  categories.forEach((category) => {
    const group = planetsArray.filter((planet) => planet.category === category);

    group.forEach((planet, index) => {
      const row = document.createElement("tr");

      if (index === 0 && category !== "Jovian Planets") {
        const categoryCell = document.createElement("td");
        categoryCell.className = "category-cell";
        categoryCell.colSpan = 2;
        categoryCell.rowSpan = group.length;
        categoryCell.textContent = category;
        row.appendChild(categoryCell);
      }

      if (category === "Jovian Planets") {
        if (index === 0) {
          const categoryCell = document.createElement("td");
          categoryCell.className = "category-cell";
          categoryCell.rowSpan = group.length;
          categoryCell.textContent = category;
          row.appendChild(categoryCell);
        }

        const previous = group[index - 1];

        if (!previous || previous.subCategory !== planet.subCategory) {
          const subGroup = group.filter(
            (item) => item.subCategory === planet.subCategory,
          );

          const subCategoryCell = document.createElement("td");
          subCategoryCell.className = "category-cell";
          subCategoryCell.rowSpan = subGroup.length;
          subCategoryCell.textContent = planet.subCategory;
          row.appendChild(subCategoryCell);
        }
      }

      const nameCell = document.createElement("td");
      nameCell.textContent = planet.name;

      const massCell = document.createElement("td");
      massCell.textContent = planet.mass;

      const diameterCell = document.createElement("td");
      diameterCell.textContent = planet.diameter.replace(" km", "");

      row.append(nameCell, massCell, diameterCell);
      tbody.appendChild(row);
    });
  });
}

/* =========================================================
   THEME (light / dark)
   - Saved choice wins; otherwise follow the device setting.
   - The theme is stored on <html data-theme="...">.
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
  } catch (error) {
    /* storage blocked (private mode) - theme still works for this visit */
  }
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

  // Sync the button with whatever theme the <head> script already applied.
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

  // Follow device changes, but only if the user hasn't picked a theme.
  if (window.matchMedia) {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (event) => {
      if (!getSavedTheme()) applyTheme(event.matches ? "dark" : "light");
    };

    if (media.addEventListener) {
      media.addEventListener("change", onSystemChange);
    } else if (media.addListener) {
      media.addListener(onSystemChange); // older Safari
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
  const planetCard = document.getElementById("planet-card");
  const factsSection = document.getElementById("planet-facts-section");

  initializeTheme();

  // Load Earth and the complete planet table on startup.
  renderActivePlanet(planets.find((planet) => planet.name === "Earth"));
  renderPlanetTable(planets);

  function hideNoResults() {
    searchStatus.textContent = "";
    searchResults.hidden = true;
    noResults.hidden = true;

    if (planetCard) planetCard.hidden = false;
    if (factsSection) factsSection.hidden = false;
  }

  function showNoResults() {
    searchStatus.textContent = "No results";
    searchResults.hidden = false;
    noResults.hidden = false;

    if (planetCard) planetCard.hidden = true;
    if (factsSection) factsSection.hidden = true;
  }

  function searchPlanet() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      hideNoResults();
      return;
    }

    const selectedPlanet = planets.find(
      (planet) => planet.name.toLowerCase() === query,
    );

    if (selectedPlanet) {
      hideNoResults();
      renderActivePlanet(selectedPlanet);
    } else {
      showNoResults();
    }
  }

  // Search when the form is submitted.
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchPlanet();
  });

  // Update the results while the user types.
  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() === "") {
      hideNoResults();
    } else {
      searchPlanet();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePlanetExplorer);
} else {
  initializePlanetExplorer();
}
