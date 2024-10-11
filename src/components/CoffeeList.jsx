import React from 'react';
import CoffeeCard from './CoffeeCard';
import coffee1 from '../assets/coffee1.png';
import coffee2 from '../assets/coffee2.png';

const coffeeData = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    tag: 'Tradicional',
    image: coffee1  
  },
  {
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    tag: 'Tradicional com Leite',
    image: coffee2
  },
  // Outros cafés...
];

const CoffeeList = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {coffeeData.map((coffee, index) => (
        <CoffeeCard key={index} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeList;
