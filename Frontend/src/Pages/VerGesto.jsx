import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CameraRecognition from '../components/general/CameraRecognition';
import InfoDialog from '../components/general/InfoDialog';
import { files } from '../components/constants/FilesImagesGestos'; // Importar las constantes

const VerGesto = () => {
    const { id } = useParams();  // Obtener el ID del gesto desde la URL
    const location = useLocation();  // Obtener el estado pasado desde Link
    const { title } = location.state || {};  // Extraer el título del estado
    const [prediccion, setPrediccion] = useState("-");

     // Buscar el gesto correspondiente en el array 'files'
     const gesture = files.find(file => file.url === id);
 
    // Si no se encuentra el gesto, puedes manejarlo aquí
    const dialogContent = gesture ? gesture.dialogContent : 'Información no disponible.';

    return (
        <div className="bg-background p-0 w-screen ">
            <div className='h-screen grid justify-center items-center justify-items-center'>
                <div className='grid justify-items-strech '>
                    <div className=' justify-self-end '>
                        <InfoDialog 
                            title={title}  // Pasa el título al InfoDialog
                            content={dialogContent}  // Pasa el contenido al InfoDialog
                        />
                    </div>
                    <h1 className="text-2xl text-center font-bold sm:text-3xl md:text-5xl lg:text-5xl/none p-4">
                        GESTO: {title}
                    </h1>
                    <CameraRecognition prediccion={prediccion} setPrediccion={setPrediccion} modelo={id}/>
                </div>
                
                
                <div className='grid  md:grid-cols-2  justify-items-center'>
                    <div className='p-3'>
                        <h1 className=''>
                        VIDEO
                        </h1>
                        <CameraRecognition />
                    </div>
                    <div className="flex  flex-col justify-center items-center italic">
                        <h1 className='items-center'>Imite la imagen que se encuentra abajo 👇</h1>
                        <img
                            className="border-double border-4 border-yellow-400 rounded-lg "
                            alt={title}
                            src={`/images/FigurasMil/${id}.png`}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default VerGesto;