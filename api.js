const PLANET_API_URL = "https://anurella.github.io/json/planet.json";

/**
 * Task 2: Fetch and normalize planet data
 */
export async function getPlanets() {
  try {
    const response = await fetch(PLANET_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((planet) => ({
      name: planet.name,
      image: planet.image,
      type: planet.type,
      distanceFromSun: planet.distanceFromSun,
      mass: planet.mass,
      diameter: planet.diameter,
      period: planet.period,
      temperature: planet.temperature,
      gravity: planet.gravity,
      moon: planet.moons,
      description: planet.description
    }));
  } catch (error) {
    console.error("Planet API error:", error.message);
    throw error;
  }
}

// Global attachment so teammates can access the data without editing imports
if (typeof window !== "undefined") {
  window.getPlanets = getPlanets;
}
