import React from "react";

function SimpleCardComp({title}) {
    return ( 
     
   <div className="p-4 m-3 rounded-lg bg-gradient-to-r
    from-gray-900 via-gray-800 to-black
     text-white shadow-sm shadow-amber-50
        transform hover:scale-105 transition duration-300 ease-in-out
        cursor-pointer
     ">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
   </div>
     );
}

export default SimpleCardComp;