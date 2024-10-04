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
    <div className=' flex justify-around py-10'>
        <div className=" bg-gradient-to-l from-slate-500 dark:bg-slate-800  max-w-3xl xl:px-20 dark:border-slate-500 border-2 border-gray-800 rounded-3xl px-10 py-10 lg:py-10 mx-10">
          
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">NUESTRO EQUIPO </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {equipo.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  className="rounded-xl sm:size-48 lg:size-40 mx-auto"
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
  );
}

export default Nosotros;