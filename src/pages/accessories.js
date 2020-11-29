import React from 'react';

const Accessories= () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <img src={ process.env.PUBLIC_URL+ "/accessories.jpg"} width ="800" position="left"alt=""/>
    </div>
  );
};

export default Accessories;