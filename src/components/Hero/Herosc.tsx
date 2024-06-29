import React from 'react';
import Card from './Card';

const Herosc = () => {
  return (
    <div style={{height: "100vh"}}>
    <div className="flex justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold" style={{ color: 'white', textDecoration: 'underline', margin:"-50%" }}>Our Services</h1>
      </div>
    </div>
    <div className='flex flex-row justify-center align-middle gap-6'>
        <Card />
        <Card />
    </div>
    </div>
  );
}

export default Herosc;
