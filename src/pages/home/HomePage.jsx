import React, { Component, useState, useEffect, useRef } from 'react';
import { logoutUser } from '../../utils/manageStorage';
import { useItems } from '../../hooks/useItems';
import CardComp from '../../components/CardComp';
import TopSectionComp from '../../components/TopSecctionComp';
import CircularProgress from '../../components/CircularProgress';
import LeftBar from '../../components/leftBar';
import DynamicTable from '../../components/DynamicTable';
import Loading from '../../components/Loading';

function HomePage() {

    const { getApiItems, error } = useItems() // ✅ hook at top level

    const [items, setItems]= useState([])
    const [loading, setLoading] = useState(false); // ✅ loading state
    const [progress, setProgress] = useState([12, 43, 21])
    const [showSidebar, setShowSidebar] = useState(false);
    const sidebarRef = useRef();


    const columns = ['Name', 'Age', 'Country'];
      const data = [
      ['Alice', 30, 'USA'],
      ['Bob', 25, 'Canada'],
      ['Vanessa', 24, 'Mexico']
    ];


      // 🔁 Fetch when the component mounts
 useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true); // 🔁 Start loading
        const data = await getApiItems();
        setItems(data);
        console.log('✅ Items loaded:', data);
      } catch {
        console.error('❌ Items fetch failed');
      } finally{
        setLoading(false)
      }
    };

    fetchItems();
  }, []); 


  useEffect(() => {
    console.log('🎯 Progress changed:', progress);
  }, [progress]);


    // 👇 Close sidebar if clicking outside of it
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target) &&
          window.innerWidth < 640 // only apply on mobile
        ) {
          setShowSidebar(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);



    return ( 
        <div className='flex  w-full h-full  bg-black '>
           
           {loading && <Loading fullScreen color="text-red-400" />}

          
          <div className='flex ' ref={sidebarRef}>
          <LeftBar title = 'something' 
           className= {
            `${showSidebar ? 'flex' : 'hidden'}  
            ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
               sm:translate-x-0 sm:static sm:block
             fixed top-0 left-0 h-full w-64 bg-gray-900 z-50
            transform transition-transform duration-300 ease-in-out
            `
            }  />
           
          </div>
         
           <div className='flex flex-1 flex-col'>
          
     
     <div className='flex ' >
            <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="sm:hidden p-4 text-white"
            >
          <i className="fas fa-bars text-2xl"></i>
          </button>

        <div className='flex-1  '>
          <TopSectionComp/>
          </div>
     </div>
     
            <div className='flex  flex-col  sm:flex-row w-full  justify-around '>
           
            {items.map((item) => (
           <CardComp
            key={item.id} // 🔑 always add key when mapping
            iconClass={item.icon}
            text={item.title}
            gradient={item.color}
            event={() =>
              setProgress(prev =>
                prev.map((value, i) => (i === item.id - 1 ? value + 10 : value))
              )
            }
          />
          ))}
     
            </div>

           <div className='flex bg-black flex-col sm:flex-row flex-1 items-center justify-around '>
            
           <CircularProgress percentage={progress[0]} color="text-blue-500" title='Title 1' />
           <CircularProgress percentage={progress[1]} color="text-yellow-500" title='Title 2'/>
           <CircularProgress percentage={progress[2]} color="text-red-500" title='Title 3'/>

           </div>
           
           <div className='flex  flex-1 items-center'>
            
           <DynamicTable
            columns={columns}
            data={data}
            striped
            bordered
            hover
            className='flex w-full h-64 '
/>;


           </div>
           </div>
        
        </div>
     );
}

export default HomePage;