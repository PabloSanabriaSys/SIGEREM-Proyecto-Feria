import React, { useState } from 'react'
import { Card } from "@/components/ui/card"

const FlipCard = ({ imageSrc, altText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="flip-card w-64 h-64 [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Card className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white text-primary-foreground rounded-lg flex items-center justify-center p-4 text-center">
          <p>{backText}</p>
        </div>
      </Card>
    </div>
  )
}

export default FlipCard;