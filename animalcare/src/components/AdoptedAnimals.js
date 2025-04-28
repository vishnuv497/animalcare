import React from "react";
import "./AdoptedAnimals.css";

const animals = [
  {
    name: "Bella",
    species: "Dog",
    status: "Adopted",
    image: "https://placedog.net/400/300?id=1"
  },
  {
    name: "Whiskers",
    species: "Cat",
    status: "Adopted",
    image: "https://loremflickr.com/400/300/parrot2"
  },
  {
    name: "Max",
    species: "Dog",
    status: "Adopted",
    image: "https://placedog.net/400/300?id=2"
  },
  {
    name: "Milo",
    species: "Rabbit",
    status: "Adopted",
    image: "https://placebear.com/400/300"
  },
  {
    name: "Charlie",
    species: "Parrot",
    status: "Adopted",
    image: "https://loremflickr.com/400/300/parrot"
  },
  {
    name: "Daisy",
    species: "Dog",
    status: "Adopted",
    image: "https://placedog.net/400/300?id=5"
  },
  {
    name: "Luna",
    species: "Cat",
    status: "Adopted",
    image: "https://placekitten.com/401/300"
  },
  {
    name: "Rocky",
    species: "Hamster",
    status: "Adopted",
    image: "https://loremflickr.com/400/300/hamster"
  },
  {
    name: "Coco",
    species: "Dog",
    status: "Adopted",
    image: "https://placedog.net/400/300?id=6"
  },
  {
    name: "Biscuit",
    species: "Cat",
    status: "Adopted",
    image: "https://placekitten.com/402/300"
  },
  {
    name: "Ziggy",
    species: "Parrot",
    status: "Adopted",
    image: "https://loremflickr.com/400/300/parrot2"
  },
  {
    name: "Pip",
    species: "Rabbit",
    status: "Adopted",
    image: "https://placebear.com/401/300"
  },
  {
    name: "Ginger",
    species: "Dog",
    status: "Adopted",
    image: "https://placedog.net/400/300?id=7"
  },
  {
    name: "Maggie",
    species: "Cat",
    status: "Adopted",
    image: "https://placekitten.com/403/300"
  },
  {
    name: "Spotty",
    species: "Hamster",
    status: "Adopted",
    image: "https://loremflickr.com/400/300/hamster2"
  },
  {
    name: "Oscar",
    species: "Rabbit",
    status: "Adopted",
    image: "https://placebear.com/402/300"
  }
];

const AdoptedAnimals = () => {
  return (
    <section className="adopted-section">
      <h2>Recently Adopted Animals</h2>
      <div className="animal-grid-wrapper">
      <div className="animal-grid">
        {animals.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img src={animal.image} alt={animal.name} />
            <h3>{animal.name}</h3>
            <p>{animal.species}</p>
            <span className="adopted-badge">{animal.status}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default AdoptedAnimals;
