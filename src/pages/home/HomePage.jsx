import React, { Component, useState, useEffect } from 'react';
import { logoutUser } from '../../utils/manageStorage';
import { useItems } from '../../hooks/useItems';
import CardComp from '../../components/CardComp';


function HomePage() {

    const { getApiItems, error } = useItems() // ✅ hook at top level

    const [items, setItems]= useState([])

      // 🔁 Fetch when the component mounts
   useEffect(() => {
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
  }, []); 


    return ( 
        <div className='grid 
        grid-cols-1  sm:grid-cols-2 
         md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10'>
     
     {items.map((item) => (
      <CardComp
    key={item.id}
    title={item.name}
    description={`Total: ${item.count} - ${item.note}`}
    imageUrl="https://w7.pngwing.com/pngs/803/613/png-transparent-bloo-frances-frankie-foster-imaginary-friend-cartoon-network-bloo-thumbnail.png" // usa una imagen predeterminada o dinámica
    onClick={() => alert(`Clicked ${item.name}`)}
  />
   ))}
            
        </div>
     );
}

export default HomePage;