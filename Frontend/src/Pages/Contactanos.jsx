import React from 'react';
import NeuralNetworkAnimation from '../components/general/NeuralNetworkAnimation';
import { neuronas } from '../components/constants/Neuronas';
import { animationSiregem } from "../components/constants/AnimationSiregem";
import ContactForm from '../components/ContactForm';

const Contactanos = () => {
  return (
    <div className="p-0 w-full bg-background">
      <div className='bg-black h-screen flex items-center justify-center'>
        <NeuralNetworkAnimation circles={animationSiregem}/>
        <div className='bg-gray-500 rounded'>
          <h1 className='p-4 font-mono font-bold'>
            TIENES DUDAS, CONTACTANOS
          </h1>
          <div className='p-6'>
          </div>
          
        </div>

      </div>
    </div>
    
  );
};

export default Contactanos;