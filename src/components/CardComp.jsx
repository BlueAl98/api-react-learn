
import React from 'react';

function CardComp({ iconClass, text, gradient = 'from-blue-500 to-purple-600' }) {
  return (
    <div className={`flex flex-row items-center 
    justify-around text-white 
    rounded-2xl 
    shadow-lg p-6
    bg-gradient-to-br ${gradient} 
    flex-1
    m-4
    ` 
     }>
      <i className={`${iconClass} text-4xl mb-2`}></i>
      <div className="text-lg font-semibold text-center p-3">
        {text}
      </div>
    </div>
  );
}

export default CardComp;