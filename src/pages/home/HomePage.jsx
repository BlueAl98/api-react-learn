import React, { Component } from 'react';
import { logoutUser } from '../../utils/manageStorage';
import { useItems } from '../../hooks/useItems';

function HomePage() {

    const { getApiItems, error } = useItems() // ✅ hook at top level


    const handleItems = async (e) => {
        e.preventDefault()
        try {
          const data = await getApiItems()
          console.log('✅ Items:', data)
        } catch {
          console.error('❌ Items fail')
        }
      }


    return ( 
        <div>
            <h1 >Home page</h1>
            <button onClick={logoutUser} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            log out 
          </button>
          <br />
          <br />
          <button onClick={handleItems} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            getSomething
          </button>
            
        </div>
     );
}

export default HomePage;