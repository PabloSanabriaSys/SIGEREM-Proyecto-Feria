import CardFlipImages from "../components/CardFlipImages";
import NeuralNetworkAnimation from "../components/general/NeuralNetworkAnimation";
import VideoDialog from "../components/VideoDialog";
import { animationSiregem } from "../components/constants/AnimationSiregem";
import { neuronas } from "../components/constants/Neuronas";
export default function Home() {
  return (
    <div className=" p-0 w-full bg-background">
      <div className="bg-black h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="p-4 flex flex-col justify-center items-start text-center md:text-left">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Reconocimiento y
              <br className="sm:block hidden" />{" "}
              <span className="bg-gradient-to-t from-blue-500 via-sky-300 to-teal-100 bg-clip-text text-transparent">
                Entrenamiento de
              </span>{" "}
              <br className="sm:block hidden" />{" "}
              Gestos Militares
            </h1>
            <p className="mt-4 w-full md:w-3/4 text-justify font-mono text-lg sm:text-xl text-white">
              Mejorando la instrucción militar con inteligencia artificial y realidad virtual
            </p>
            <div className="flex items-center justify-center py-4">
              <VideoDialog 
                triggerText="CONOCE SIGEREM  " 
                videoUrl="https://www.youtube.com/embed/-CveDyA8PQU?autoplay=1"  
                videoTitle="Revolucionando el Entrenamiento Militar 2024-09-26"
              />
            </div>
          </div>
          <div className="grid justify-items-center p-4">
            <video className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg h-auto" autoPlay loop muted>
              <source src="https://video.wixstatic.com/video/61098f_2eab1bc7d0b9424cad87d3965803bf52/720p/mp4/file.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
      </div>
      <div className="relative h-screen bg-gray-950 p-4 flex flex-col justify-center items-center md:text-left">
        {/* Componente NeuralNetworkAnimation en el fondo */}
        <div className="absolute inset-0 z-0  ">
          <NeuralNetworkAnimation circles={neuronas}/>
        </div>

        {/* Contenido superpuesto (h1 y CardFlipImages) */}
        <div className="relative z-10">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center py-10">
            ALGUNOS DATOS GENERALES
          </h1>
          <CardFlipImages />
        </div>
      </div>
        
    </div>
  );
} 