import { Link } from 'react-router-dom';
import { files } from './constants/FilesImagesGestos'; // Importar las constantes
import InfoDialog from './general/InfoDialog';

export default function GestosSecction() {
    return (
        <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {files.map((file) => (
                <li key={file.source} className="relative">
                    <Link
                        to={`${file.url}`}  // Enlace basado en la URL del gesto
                        state={{ title: file.title }}  // Pasar el título como estado
                        className="group h-60 block w-full overflow-hidden rounded-lg border-2 border-transparent bg-background 
                        hover:border-white hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] transition-all duration-300"
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
