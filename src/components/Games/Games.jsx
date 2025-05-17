import { useState } from "react";
import gamesData from "../../data/games.json";
import "./Games.css";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  const handleBack = () => {
    setSelectedGame(null);
  };

  if (selectedGame) {
    return (
      <div className="games-container">
        <button className="back-button-games" onClick={handleBack}>
          ← Volver
        </button>
        <div className="game-detail">
          <h2>{selectedGame.title}</h2>

          {selectedGame.image && (
            <img
              src={selectedGame.image}
              alt={`Portada de ${selectedGame.title}`}
              className="game-image"
            />
          )}
          <div className="game-info">
            <div className="game-metadata">
              <p>
                <strong>Género:</strong> {selectedGame.genre}
              </p>
              <p>
                <strong>Año:</strong> {selectedGame.year}
              </p>
              <p>
                <strong>Calificación:</strong> {selectedGame.rating}/10
              </p>
            </div>
            <p className="game-description">{selectedGame.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="games-container">
      <h1>Colección de Videojuegos</h1>
      <div className="games-grid">
        {gamesData.games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameSelect(game)}
          >
            <div className="game-card-content">
              <h3>{game.title}</h3>
              {game.image && (
                <img
                  src={game.image}
                  alt={`Portada de ${game.title}`}
                  className="game-card-image"
                />
              )}

              <div className="game-rating">
                <strong>{game.rating} / 10</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
