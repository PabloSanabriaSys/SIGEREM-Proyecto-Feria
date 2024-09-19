import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const imageUrls = [
  "https://www.esciupfnews.com/wp-content/uploads/2020/12/Inteligencia-Artificial.jpg",
  "https://th.bing.com/th/id/OIP.-jmFv6pAWdq6gdvTmEeNGAHaFY?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/R.e76c29ed56d7da04765cac68d8f3ea75?rik=9qiY%2bOPXG7bFKA&pid=ImgRaw&r=0",
  
]
export function CarruselImagenes() {
  return (
    <Carousel className="w-full max-w-xs">
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
