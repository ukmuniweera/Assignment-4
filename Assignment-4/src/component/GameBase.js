import React, { useEffect, useState } from 'react';
import { animals } from '../assets/dataBase/AnimalsDb';
import '../assets/css/styles.css';

const GameBase = () => {
  const [randomAnimal, setRandomAnimal] = useState(null);
  const [result, setResult] = useState('');

  useEffect(() => {
    generateRandomAnimal();
  }, []);

  const generateRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setRandomAnimal(animals[randomIndex]);
    setResult('');
  };

  const handleAnimalClick = (selectedAnimal) => {
    setResult(selectedAnimal === randomAnimal.name ? 'WIN' : 'LOSE');
    setTimeout(generateRandomAnimal, 1000);
  };

  if (!randomAnimal) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gameContainer">
      <table className="game-table">
        <thead>
          <tr>
            <th colSpan="3">
              <h2>ANIMAL MATCHING GAME</h2>
            </th>
          </tr>
          <tr>
            <th>
              <h3>Result</h3>
            </th>
            <th>
              <h3>Animal Name</h3>
            </th>
            <th>
              <h3>Select the Animal</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="result-col" width="10%">
              <h2>{result}</h2>
            </td>
            <td className="animalname-col" width="20%">
              <h2>{randomAnimal.name.toUpperCase()}</h2>
            </td>
            <td className="animalgrid-col" width="70%">
              <div className="animalgrid">
                {animals.map((animal) => (
                  <div
                    key={animal.name}
                    className="animalgrid-item"
                    onClick={() => handleAnimalClick(animal.name)}
                  >
                    <img
                      src={require(`../assets/images/${animal.img}`)}
                      alt={animal.name}
                      className="animal-image"
                    />
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameBase;
