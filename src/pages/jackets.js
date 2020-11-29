import React from 'react';

const Jackets= () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
            
            <img src={ process.env.PUBLIC_URL+ "/jackets.jpg"} width ="900" alt=""/>
      </div>
    );
  };
  
  export default Jackets;