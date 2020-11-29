import React from 'react';

const Ourpartner= () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
            
            <img src={ process.env.PUBLIC_URL+ "/reaktor.png"} width ="1000" alt=""/>
      </div>
    );
  };
  
  export default Ourpartner;