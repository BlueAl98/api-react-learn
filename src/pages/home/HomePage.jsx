import React, { Component } from 'react';


function HomePage() {
    return ( 
        <div>
            <h1 onClick={localStorage.removeItem('token')}>Home page</h1>
        </div>
     );
}

export default HomePage;