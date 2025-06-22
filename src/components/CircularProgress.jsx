import React from 'react';

const CircularProgress = ({ percentage = 0, color = 'text-blue-500',  title = 'default' }) => {
  const radius = 60;
  const stroke = 15;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className='flex flex-col justify-center'>

    <div className="flex items-center justify-center w-32 h-32">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="currentColor"
          className="text-gray-200"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="currentColor"
          className={`${color} transition-all duration-500 ease-out`}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <span className="absolute text-xl font-bold text-white drop-shadow">
        {percentage}%
      </span>

    </div>
      <br />
      <h1 className='flex justify-center text-2xl
       text-amber-50 font-bold  shadow-2xl  shadow-white
         
       '>{title}</h1>

    </div>
  );
};

export default CircularProgress;