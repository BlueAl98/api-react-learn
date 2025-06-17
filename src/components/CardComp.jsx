import React from 'react'

function CardComp({ title, description, imageUrl, onClick }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default CardComp