import React from 'react';

const Shirts= () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
        
        <img src={ process.env.PUBLIC_URL+ "/shirts.jpg"} width ="800" alt=""/>
      </div>
    );
  };
  
  export default Shirts;