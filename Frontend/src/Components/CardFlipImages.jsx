import React from 'react';
import FlipCard from './general/FlipCard';

const CardFlipImages = () => {
  // Definimos un array con las imágenes y textos correspondientes
  const cardsData = [
    {
      imageSrc: "/images/fondoimagenes/ImagenHerramienta.png",
      altText: "Herramientas Usadas",
      backText: "La herramienta que se utilizó es MediaPipe, una tecnología que captura y analiza gestos en tiempo real para optimizar el reconocimiento y evaluación de movimientos."
    },
    {
      imageSrc: "/images/fondoimagenes/UsoDeIA.jpeg",
      altText: "Uso de Inteligencia Artificial (IA)",
      backText: "La inteligencia artificial se emplea para procesar y clasificar los gestos militares con alta precisión, facilitando la evaluación automática durante el entrenamiento."
    },
    {
      imageSrc: "/images/fondoimagenes/ComparacionIAHumano.jpeg",
      altText: "Precisión en la Identificación de Gestos",
      backText: "El sistema alcanzó una alta precisión en la identificación de gestos, proporcionando una herramienta eficiente para la formación táctica militar."
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-around ">
      {cardsData.map((card, index) => (
        <FlipCard
          key={index} 
          imageSrc={card.imageSrc}
          altText={card.altText}
          backText={card.backText}
        />
      ))}
    </div>
  );
};

export default CardFlipImages;
