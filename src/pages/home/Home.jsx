import React from 'react';
import './Home.scss';
import ageOfEmpire from '../../assets/Age_of_Empires_4_kapak.jpg';

function Home() {
  return (
    <div className="text-center home">
      <h1 className="display-4 py-3">Home Page</h1>
      <img className="main_foto" src={ageOfEmpire} alt="age of empires" />
    </div>
  );
}

export default Home;
