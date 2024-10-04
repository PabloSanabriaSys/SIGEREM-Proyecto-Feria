import React from 'react';
import YaraImagen from '/images/equipo/yara.jpg';
import PabloImagen from '/images/equipo/pablo.jpg';
import LeonardoImagen from '/images/equipo/leonardo.jpg';
import IngeImagen from '/images/equipo/inge.jpg';

const equipo = [
  {
    src: PabloImagen,
    alt: 'Pablo Sanabria',
    name: 'Pablo Sanabria',
    role: 'Estudiante / Developer / Backend'
  },
  {
    src: YaraImagen,
    alt: 'Yara Osnayo',
    name: 'Yara Osnayo',
    role: 'Estudiante / Frontend'
  },
  {
    src: LeonardoImagen,
    alt: 'Leonardo Eguino',
    name: 'Leonardo Eguino',
    role: 'Estudiante / Developer / Backend'
  },
  {
    src: IngeImagen,
    alt: 'Oscar Contreras ',
    name: 'Oscar Contreras ',
    role: 'Tutor / Docente'
  }
  
];
const Nosotros = () => {
  return(
    <div className=' p-0 w-full bg-background grid justify-items-center content-center'>
        <div className=" h-screen max-w-3xl xl:px-20 p-4  ">
          <div className='rounded-lg border-2 bg-slate-950  dark:border-white p-2
      shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] transition-all duration-300 bg-gray-90'>
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">NUESTRO EQUIPO </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {equipo.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    className="rounded-xl size-52 sm:size-48 lg:size-40 mx-auto"
                    src={member.src}
                    alt={member.alt}
                  />
                  <div className="mt-2 sm:mt-4">
                    <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
                      {member.name}
                    </h3>
                    <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
    </div>
  );
}

export default Nosotros;