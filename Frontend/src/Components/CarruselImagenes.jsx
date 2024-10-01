import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const imageUrls = [
  "/images/fondoimagenes/fondo1.png",
  "/images/fondoimagenes/fondo2.png",
  "/images/fondoimagenes/fondo3.png",
  "/images/fondoimagenes/fondo5.jpeg",
  "/images/fondoimagenes/fond3.png",
  
]
export function CarruselImagenes() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-xs"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}>
    <CarouselContent>
      {imageUrls.map((url, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={url} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}
