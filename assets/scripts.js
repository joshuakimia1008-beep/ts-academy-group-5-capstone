// Function to update the main active planet card UI
function renderActivePlanet(planet) {
  document.getElementById('planet-name').textContent = planet.name;
  document.querySelector('.planet-type').textContent = planet.type;
  document.getElementById('planet-description').textContent = planet.description;
  document.getElementById('active-planet-img').src = planet.image; // e.g. "assets/earth_ picture.png"
  
  // Update primary stats
  document.getElementById('planet-gravity').textContent = planet.gravity;
  document.getElementById('planet-mass').textContent = planet.mass;
  document.getElementById('planet-period').textContent = planet.period;
  
  // Update secondary stats (using the new unique IDs)
  document.getElementById('planet-temp').textContent = planet.temperature;
  document.getElementById('planet-orbit').textContent = planet.orbit;
  document.getElementById('planet-diameter').textContent = planet.diameter;
  document.getElementById('planet-distance').textContent = planet.distance;
}

// Function to populate the Planetary Facts at a Glance Table dynamically
function renderPlanetTable(planetsArray) {
  const tableBody = document.querySelector('.planet-facts-table tbody');
  tableBody.innerHTML = ''; // Clear existing static rows

  planetsArray.forEach(planet => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${planet.category}</td>
      <td>${planet.name}</td>
      <td>${planet.mass}</td>
      <td>${planet.diameter}</td>
    `;
    tableBody.appendChild(row);
  });
}
