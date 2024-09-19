import { CarruselImagenes } from "../components/CarruselImagenes"

export default function Home() {
  return (
    <div className="bg-background">
      <div className=" grid justify-items-center p-6">
        <div className="flex flex-col items-center md: px-6">
          <h1 className="text-3xl text-center font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
            Sistema de Reconocimiento y Entrenamiento de Gestos Militares
          </h1>
          <p className="mx-auto  md:text-xl py-4">
            Mejorando la instrucción militar con inteligencia artificial y realidad virtual
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className=" grid justify-items-center">
          <h1> carrusel</h1>
          <CarruselImagenes/>
        </div>
        <div>
          <h1>textp</h1>
        </div>
      </div>
    </div>
  )
}