import React, { useState } from 'react';
import shoppingCart from '../assets/ShoppingCartSimple.png';

const CoffeeCard = ({ coffee }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {
        alert(`Adicionado ${quantity}x ${coffee.name} ao carrinho`);
    };

    return (
        <div className="bg-[#F3F2F2] p-4 border rounded-tr-3xl rounded-bl-3xl shadow-lg text-center flex flex-col justify-between h-full">
            {/* Imagem e Tag */}
            <div>
                <img
                    src={coffee.image}
                    alt={coffee.name}
                    className=" w-24 h-24 mx-auto -mt-10 rounded-full shadow-md object-cover"
                />
                <span className="bg-yellow-500 text-white text-xs rounded-full px-3 py-1 mb-2 inline-block">
                    {coffee.tag}
                </span>
                <h3 className="text-lg font-bold mb-2">{coffee.name}</h3>
                <p className="text-gray-600 mb-4">{coffee.description}</p>
            </div>

            {/* Preço e Controles de Quantidade */}
            <div className="flex justify-between items-center mt-4 ">
                <span className="text-lg font-bold">R$ {coffee.price.toFixed(2)}</span>
                <div className="flex items-center bg-[#E6E5E5] text-purple-700 font-bold   ">
                    <button
                        onClick={decreaseQuantity}
                        className="px-3 py-1 bg-gray-200 rounded-l bg-pur500"
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        readOnly
                        className="w-5 h-6 text-center px-2 border rounded-md bg-[#E6E5E5] "
                    />
                    <button
                        onClick={increaseQuantity}
                        className="px-3 py-1 bg-gray-200 rounded-r"
                    >
                        +
                    </button>
                </div>
                <button onClick={handleAddToCart}  className=" bg-purple-500 text-white p-1 rounded-lg"  >
                  <img src={shoppingCart} alt="carrinho" />  
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
