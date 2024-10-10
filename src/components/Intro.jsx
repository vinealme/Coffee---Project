import React from 'react';
import item1 from '../assets/icon.png';
import item2 from '../assets/icon2.png';
import item3 from '../assets/icon3.png';
import item4 from '../assets/icon4.png';
import coffee from '../assets/coffee.png';

const Intro = () => {
    return (
        <div className='max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-8 py-12 space-x-20 opacity-90  '>
            {/* Coluna Esquerda: Texto e Ícones */}
            <div className='space-y-6'>
                {/* Título */}
                <h1 className='text-4xl font-bold text-gray-800'>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className='text-lg text-gray-600'>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>

                {/* Itens do Grid */}
                <div className='grid grid-cols-2 gap-6 space-y-2 gap-x-16   '>
                    {/* Item 1 */}
                    <div className='flex items-center space-x-2   '>
                        <img src={item1} alt="Compra simples e segura" className='w-8 h-8' />
                        <p className='text-gray-700 text-base whitespace-nowrap '>Compra simples e segura</p>
                    </div>
                    {/* Item 2 */}
                    <div className='flex items-center space-x-2   '>
                        <img src={item4} alt="Embalagem mantém o café intacto" className='w-8 h-8' />
                        <p className='text-gray-700 text-base whitespace-nowrap '>Embalagem mantém o café intactoa</p>
                    </div>
                    {/* Item 3 */}
                    <div className='flex items-center space-x-2  '>
                        <img src={item2} alt="Entrega rápida e rastreada" className='w-8 h-8' />
                        <p className='text-gray-700 text-base whitespace-nowrap'>Entrega rápida e rastreada</p>
                    </div>
                    {/* Item 4 */}
                    <div className='flex items-center space-x-2  '>
                        <img src={item3} alt="O café chega fresquinho até você" className='w-8 h-8' />
                        <p className='text-gray-700 text-base whitespace-nowrap  '>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>

            {/* Coluna Direita: Imagem */}
            <div className='flex justify-end '>
                <img src={coffee} alt="Copo de café" className=' flex max-w-full h-auto' />
            </div>
        </div>
    );
};

export default Intro;
