import React from "react";
import SearchComp from "./SearchComp";
import ProfilePhoto from "./ProfilePhotoComp";

function TopSectionComp() {
    return (  
        <div className='flex h-16 p-3 justify-center sm:justify-between '>
        <SearchComp/>

         <div className="flex items-center">
         <h1 className="text-white m-5">Logout</h1>
          <i className="fas fa-bell text-2xl text-white m-5"/>
          <ProfilePhoto imageUrl={"https://avatars.githubusercontent.com/u/125913672?v=4"}/>
         </div>

       </div>
    );
}

export default TopSectionComp