const planets = [
  {
    name: "Mercury",
    image: "./assets/mercury.png",
    mass: 0.055,
    radius: 2439.7,
    distance: 57.9,
  },
  {
    name: "Venus",
    image: "./assets/venus.png",
    mass: 0.815,
    radius: 6051.8,
    distance: 108.2,
  },
  {
    name: "Earth",
    image: "./assets/earth.png",
    mass: 1.0,
    radius: 6371,
    distance: 149.6,
  },
  {
    name: "Mars",
    image: "./assets/mars.png",
    mass: 0.107,
    radius: 3389.5,
    distance: 227.9,
  },
  {
    name: "Jupiter",
    image: "./assets/jupiter.png",
    mass: 318,
    radius: 69911,
    distance: 778.5,
  },
  {
    name: "Saturn",
    image: "./assets/saturn.png",
    mass: 95.2,
    radius: 58232,
    distance: 1433.5,
  },
  {
    name: "Uranus",
    image: "./assets/uranus.png",
    mass: 14.5,
    radius: 25362,
    distance: 2872.5,
  },
  {
    name: "Neptune",
    image: "./assets/neptune.png",
    mass: 17.1,
    radius: 24622,
    distance: 4495.1,
  },
];

console.log(planets[0].name); // Output: "Mercury"
console.log(planets[0].mass); // Output: 0.055
console.log(planets[0].radius); // Output: 2439.7
console.log(planets[0].distance); // Output: 57.9

const planetList = document.querySelector(".planets");
planets.forEach((planet) => {
  // BOX
  const planetBox = document.createElement("div");
  planetBox.classList.add("planets__box");

  // IMAGE
  const planetImage = document.createElement("img");
  planetImage.setAttribute("src", planet.image);
  planetImage.innerHTML = planet.image;
  planetImage.classList.add("planets__img");

  // NAME
  const planetName = document.createElement("h2");
  planetName.textContent = planet.name;
  planetName.classList.add("planets__name");

  // DIV WITH THE INFORMATION
  const planetInformation = document.createElement("div");
  planetInformation.classList.add("planets__information");

  // MASS
  const planetMass = document.createElement("p");
  planetMass.textContent = "Mass: " + planet.mass;
  planetMass.classList.add("planets__info");

  // RADIUS
  const planetRadius = document.createElement("p");
  planetRadius.textContent = "Radius: " + planet.radius;
  planetRadius.classList.add("planets__info");

  // DISTANCE
  const planetDistance = document.createElement("p");
  planetDistance.textContent = "Distance: " + planet.distance;
  planetDistance.classList.add("planets__info");

  // APPEND CHILDS
  planetList.appendChild(planetBox);

  planetBox.appendChild(planetImage);
  planetBox.appendChild(planetName);
  planetBox.appendChild(planetInformation);
  planetBox.appendChild(planetMass);
  planetBox.appendChild(planetRadius);
  planetBox.appendChild(planetDistance);
});
