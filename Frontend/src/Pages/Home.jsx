import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, BarChart, Cpu, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <h1 className="text-2xl font-bold">SIREGEM</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Inicio
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Características
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sobre Nosotros
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sistema de Reconocimiento y Entrenamiento de Gestos Militares
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Mejorando la instrucción militar con inteligencia artificial y realidad virtual
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-gray-900 hover:bg-gray-200">
                  Comenzar Entrenamiento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button >Saber Más</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Características Principales
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <CardTitle>Realidad Virtual Inmersiva</CardTitle>
                </CardHeader>
                <CardContent>
                  Entrenamiento en un entorno virtual que simula escenarios reales de operaciones militares.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <Cpu className="h-8 w-8 mb-2" />
                  <CardTitle>IA de Reconocimiento de Gestos</CardTitle>
                </CardHeader>
                <CardContent>
                  Tecnología MediaPipe para capturar y analizar gestos militares en tiempo real con alta precisión.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2" />
                  <CardTitle>Evaluación y Retroalimentación</CardTitle>
                </CardHeader>
                <CardContent>
                  Análisis detallado del desempeño y retroalimentación inmediata para mejorar la formación táctica.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Resultados Preliminares
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <Award className="h-8 w-8 mb-2" />
                  <CardTitle>Alta Precisión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">98%</p>
                  <p className="text-sm text-gray-300">en identificación de gestos</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2" />
                  <CardTitle>Satisfacción de Usuarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">95%</p>
                  <p className="text-sm text-gray-300">de aprobación en integración VR</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 text-white">
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2" />
                  <CardTitle>Mejora en Rendimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">40%</p>
                  <p className="text-sm text-gray-300">incremento en eficiencia de entrenamiento</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2023 SIREGEM. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </a>
        </nav>
      </footer>
    </div>
  )
}