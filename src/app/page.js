// import React from "react";

// const Page = () => {
//   return (
//     <div className="bg-yellow-500 h-screen   gap-4 grid grid-cols-1 xl:grid-cols-3">
//       <div className=" animate-bounce text-center text-blue-400 text-3xl bg-gray-700 pt-20 rounded-full h-96 w-96">
//         Aplicación de Edan 1
//       </div>
//       <div className=" animate-spin text-center text-blue-400 text-3xl bg-gray-700 pt-20 rounded-full h-96 w-96">
//         Aplicación de Edan 2
//       </div>
//       <div className=" animate-pulse text-center text-blue-400 text-3xl bg-gray-700 pt-20 rounded-full h-96 w-96">
//         Aplicación de Edan 3
//       </div>
      
//     </div>
//   );
// };

// export default Page;

'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const buttons = [
  { color: 'bg-red-500', animation: 'animate-bounce', popupContent: { image: 'https://via.placeholder.com/150', description: 'Descripción 1', link: '/page1' } },
  { color: 'bg-blue-500', animation: 'animate-pulse', popupContent: { image: 'https://via.placeholder.com/150', description: 'Descripción 2', link: '/page2' } },
  { color: 'bg-green-500', animation: 'animate-spin', popupContent: { image: 'https://via.placeholder.com/150', description: 'Descripción 3', link: '/page3' } },
  { color: 'bg-yellow-500', animation: 'animate-ping', popupContent: { image: 'https://via.placeholder.com/150', description: 'Descripción 4', link: '/page4' } },
  { color: 'bg-purple-500', animation: 'animate-wiggle', popupContent: { image: 'https://via.placeholder.com/150', description: 'Descripción 5', link: '/page5' } },
  { color: 'bg-pink-500', animation: 'animate-flip', popupContent: { image: 'https://via.placeholder.com/150', description: 'Descripción 6', link: '/page6' } },
];

const Popup = ({ content, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <h1>Hola Edan
    </h1>
    <div className="bg-white p-6 rounded shadow-lg">
      <img src={content.image} alt="Popup" className="w-64 h-64 object-cover" />
      <p className="mt-4">{content.description}</p>
      <button onClick={() => window.location.href = content.link} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Ir a la página</button>
      <button onClick={onClose} className="mt-2 bg-red-500 text-white py-1 px-2 rounded">Cerrar</button>
    </div>
  </div>
);

const page = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handleButtonClick = (content) => {
    setPopupContent(content);
  };

  return (
    <div className="flex flex-col items-center">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          className={`${button.color} ${button.animation} w-32 h-32 m-2`}
          onClick={() => handleButtonClick(button.popupContent)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
      {popupContent && <Popup content={popupContent} onClose={() => setPopupContent(null)} />}
    </div>
  );
};

export default page;
