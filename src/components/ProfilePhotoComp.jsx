import React from "react";

function ProfilePhoto({imageUrl}) {
    return (   
            <img 
            src= {imageUrl}
             alt="Profile"
            className="w-12 h-12 rounded-full m-2"
            />
     
      );
}

export default ProfilePhoto;