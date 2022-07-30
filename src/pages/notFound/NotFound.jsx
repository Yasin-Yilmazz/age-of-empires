import React from 'react';
import errorImg from '../../assets/404.png';

function NotFound() {
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />

    </div>
  );
}

export default NotFound;
