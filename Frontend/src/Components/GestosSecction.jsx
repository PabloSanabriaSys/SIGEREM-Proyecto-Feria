
import { Link } from 'react-router-dom';
const files = [
    {
        title: 'DISTANCIA O ALZA DE COMBATE',
        url: 'figura34',
        source: "../public/images/FigurasMil/figura34.png"
    },
      
    {
        title: 'GIRAR A LA DERECHA O COLUMNA DERECHA',
        url: 'figura68',
        source: "../public/images/FigurasMil/figura68.png"
    },
    {
        title: 'GIRAR A LA IZQUIERDA O COLUMNA IZQUIERDA',
        url: 'figura69',
        source: "../public/images/FigurasMil/figura69.png"
    },
    
    {
        title: 'ALTO O DETENGANSE',
        url: 'figura9',
        source:"../public/images/FigurasMil/figura9.png"
    },
    {
        title: 'EN CONOCIMIENTO, AFIRMATIVO O LISTO ',
        url: 'figura130',
        source: "../public/images/FigurasMil/figura130.png"
    },
    {
        title: 'SEÑAL NEGATIVA ',
        url: 'figura131',
        source: "../public/images/FigurasMil/figura131.png"
    },
    {
        title: 'CONTINUACIÓN',
        url: 'figura166',
        source: "../public/images//FigurasMil/figura166.png"
    },
    {
        title: 'GIRO A LA DERECHA O IZQUIERDA',
        url: 'figura8',
        source: "../public/images/FigurasMil/figura8.png"
    },
    {
        title: 'FORMACIÓN EN "V"',
        url: 'figura19',
        source: "../public/images/FigurasMil/figura19.png"
    },
    {
        title: 'FORMACIÓN EN CUÑA',
        url: 'figura20',
        source: "../public/images/FigurasMil/figura20.png"
    },
    {
        title: 'FORMACIÓN ESCALONADA A LA DERECHA',
        url: 'figura21',
        source: "../public/images/FigurasMil/figura21.png"
    },
    {
        title: 'APAGAR LUCES',
        url: 'figura56',
        source: "../public/images/FigurasMil/figura56.png"
    },
    {
        title: 'ENCENDER LUCES',
        url: 'figura57',
        source: "../public/images/FigurasMil/figura57.png"
    },
   
]

export default function GestosSecction() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
            <li key={file.source} className="relative">
                <Link
                    to={`${file.url}`}  // Enlace basado en la URL del gesto
                    state={{ title: file.title }}  // Pasar el título como estado
                    className="group aspect-h-7 aspect-w-10 h-60 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 border-4 border-green-600"
                >
                    <img src={file.source} alt={file.title} className="pointer-events-none object-cover group-hover:opacity-75" />
                    <button type="button" className="absolute inset-0 focus:outline-none">
                        <span className="sr-only">Ver detalles para {file.title}</span>
                    </button>
                </Link>
                <p className="pointer-events-none mt-2 block truncate text-l font-medium text-center">
                    {file.title}
                </p>
            </li>
        ))}
    </ul>
    );
  }
  


