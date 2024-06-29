import React from 'react';

const Card = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-transparent border border-white transition-transform transform hover:scale-105 hover:shadow-xl">
      <img className="w-full" src="https://via.placeholder.com/350x200" alt="Placeholder" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum augue
          consequat, blandit dui non, convallis nulla.
        </p>
      </div>
    </div>
  );
}

export default Card;
