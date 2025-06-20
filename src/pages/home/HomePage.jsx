import React, { Component, useState, useEffect } from 'react';
import { logoutUser } from '../../utils/manageStorage';
import { useItems } from '../../hooks/useItems';
import CardComp from '../../components/CardComp';
import LeftBar from '../../components/LeftBar';
import TopSectionComp from '../../components/TopSecctionComp';


function HomePage() {

    const { getApiItems, error } = useItems() // ✅ hook at top level

    const [items, setItems]= useState([])

      // 🔁 Fetch when the component mounts
 /*  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getApiItems();
        setItems(data);
        console.log('✅ Items loaded:', data);
      } catch {
        console.error('❌ Items fetch failed');
      }
    };

    fetchItems();
  }, []); */


    return ( 
        <div className='flex  w-full h-full bg-light-black'>
           
           <LeftBar title = 'something' />
           
           <div className='flex flex-1 flex-col'>
           <TopSectionComp/>
            
            <div className='flex  w-full  justify-around '>
            <CardComp
               iconClass="fas fa-bell"
               text="Bell"
              gradient="from-lime-400 to-emerald-600"
      />

            <CardComp
               iconClass="fas fa-rocket"
               text="Launch"
              gradient="from-amber-400 to-orange-600
"
      />

          <CardComp
               iconClass="fas fa-user"
               text="Launch"
              gradient="from-blue-500 to-indigo-600
"
          />
            </div>

           <div className='bg-green-500 flex-1 '>
            <h1>Container 1</h1>
           </div>
           
           <div className='bg-white flex-1 '>
            <h1>Container 2</h1>
           </div>
           </div>
        
        </div>
     );
}

export default HomePage;