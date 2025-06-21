import React from 'react';
import SimpleCardComp from './SimpleCard';

function LeftBar({title}) {
    return ( 
        <div className='flex w-1/4 h-full from-gray-900 flex-col' >
           <br />
           <div className='flex p-3 justify-center h-auto w-auto'>
           <img src="/src/assets/logo.png"   />
           </div>
          <br />
          <div className=' m-4'>
            <SimpleCardComp title="Home"/>
            <SimpleCardComp title="About"/>
            <SimpleCardComp title="Dashboard"/>
            <SimpleCardComp title="Contact"/>
            <SimpleCardComp title="Social"/>
          </div>

          <div className=" flex-1 flex items-end justify-around p-6">
          <i className="fab fa-facebook-f text-white text-xl hover:text-blue-500 transition duration-200" />
    <i className="fab fa-twitter text-white text-xl hover:text-sky-400 transition duration-200" />
    <i className="fab fa-instagram text-white text-xl hover:text-pink-500 transition duration-200" />
    <i className="fab fa-linkedin-in text-white text-xl hover:text-blue-400 transition duration-200" />
        </div>
        </div>
    );
}

export default LeftBar;