import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CameraRecognition from '../components/general/CameraRecognition';
const Intentalo = () => {
    const { id } = useParams();  // Obtener el ID del gesto desde la URL
    const location = useLocation();  // Obtener el estado pasado desde Link
    const { title } = location.state || {};  // Extraer el título del estado
    const [prediccion, setPrediccion] = useState("-");

    const nombre = {
        0: "xd",
        1: "figura8",
        2: "figura9",
        3: "figura19",
        4: "figura20",
        5: "figura21",
        6: "figura34",
        7: "figura56",
        8: "figura57",
        9: "figura68",
        10: "figura69",
        11: "figura130",
        12: "figura131",
        13: "figura166",
        100: "no_reconocido"
    };
    return (
        <div className="bg-background p-4 min-h-screen">
            <h1 className="text-2xl text-center font-bold sm:text-3xl md:text-4xl lg:text-5xl/none p-4">
                Realiza un Gesto!
            </h1>

            <div className='grid  md:grid-cols-2  justify-items-center'>
                <div className='p-3'>
                    <h1 className=''>
                        VIDEO
                    </h1>
                    <CameraRecognition prediccion={prediccion} setPrediccion={setPrediccion} />
                </div>
                <div className="flex  flex-col justify-center items-center italic">
                    <h1 className='items-center'></h1>
                    {prediccion != 0 ?
                        <img
                            className="border-double border-4 border-yellow-400 rounded-lg "
                            alt={title}
                            src={`/images/FigurasMil/${nombre[prediccion]}.png`}
                        />
                        :
                        <div className="loader">
                            <span></span>
                        </div>
                    }
                </div>

            </div>

        </div>

    );
};

export default Intentalo;