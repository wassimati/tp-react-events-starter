import { useState, useEffect } from "react";
import "./App.css";
import { WALLPAPERS } from "./data";

export default function App() {
  // TODO 1: Définir un State pour stocker l'image actuellement ouverte (null au début)
  const [selectedImage, setSelectedImage] = useState(null);

  // TODO BONUS: State pour la position de la souris (x:0, y:0)
  
  // TODO BONUS: Effet (useEffect) pour fermer la modale avec la touche "Echap"

  return (
    <div className="desktop">
      
      {/* --- FENÊTRE PRINCIPALE --- */}
      <div className="window-container">
        {/* Header style Windows */}
        <div className="window-header">
          <span className="window-title">Explorateur d'images</span>
          <div className="window-controls">
            <span className="green"></span>
            <span className="yellow"></span>
            <span className="red"></span>
          </div>
        </div>

        {/* Corps de la fenêtre */}
        <div className="window-body">
          {WALLPAPERS.map((item) => (
            <div 
              key={item.id} 
              className="thumbnail"
              // TODO 2: Ajouter l'événement onClick pour ouvrir l'image
              onClick={() => { console.log("Ouvrir", item.title) }} 
            >
              <img src={item.src} alt={item.title} />
            </div>
          ))}
        </div>
      </div>

      {/* --- BARRE DES TÂCHES --- */}
      <div className="taskbar">
        <div className="win-logo" title="Menu Démarrer">
          <div className="win-square"></div>
          <div className="win-square"></div>
          <div className="win-square"></div>
          <div className="win-square"></div>
        </div>
      </div>

      {/* --- MODALE LIGHTBOX (AFFICHER SEULEMENT SI UNE IMAGE EST SÉLECTIONNÉE) --- */}
      {/* TODO 3: Utiliser le Rendu Conditionnel ici (selectedImage && ...) */}
      {selectedImage && (
        <div 
          className="lightbox-overlay"
          // TODO 4: Fermer la modale quand on clique sur le fond gris
        >
          <div 
            className="lightbox-content"
            // TODO 5: Empêcher la fermeture quand on clique sur l'image (stopPropagation)
            // TODO 6 (Bonus): Ajouter le suivi de souris (onMouseMove)
          >
            <img src={selectedImage.src} alt="Full" />
            
            {/* Exemple de texte suiveur (à décommenter pour le bonus) */}
            {/* <div className="mouse-tracker" style={{top: y, left: x}}>
                  {selectedImage.title}
                </div> 
            */}
          </div>
        </div>
      )}

    </div>
  );
}