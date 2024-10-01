import React from 'react';
import FlipCard from './general/FlipCard';

const CardFlipImages = () => {
  // Definimos un array con las imágenes y textos correspondientes
  const cardsData = [
    {
      imageSrc: "/images/fondoimagenes/fondo1.png",
      altText: "Descripción de la imagen 1",
      backText: "El uso de inteligencia artificial para identificar y analizar gestos militares en tiempo real."
    },
    {
      imageSrc: "/images/fondoimagenes/fondo2.png",
      altText: "Descripción de la imagen 2",
      backText: "Integración de tecnología de realidad virtual para simular escenarios tácticos donde los usuarios practican gestos militares."
    },
    {
      imageSrc: "/images/fondoimagenes/fondo3.png",
      altText: "Descripción de la imagen 3",
      backText: "MediaPipe es la tecnología utilizada para capturar y analizar los gestos en tiempo real."
    },
    {
      imageSrc: "/images/fondoimagenes/fondo8.jpeg",
      altText: "Descripción de la imagen 4",
      backText: "Mejora de la formación táctica al proporcionar un sistema moderno y eficiente de reconocimiento de gestos."
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
