import React from 'react';
import { useLocation } from 'react-router';
import './UnitDetail.scss';

function UnitDetail() {
  const location = useLocation();
  const unit = location.state;
  const {
    id, name, description, age, cost, build_time: buildTime,
    reload_time: reloadTime, hit_points: hitPoints, attack, accuracy,
  } = unit;
  return (
    <div className="main_container">
      <h1 className="title">Unit Detail Page</h1>
      <div className="container w-50">
        <table className="table border text-center items">

          <tbody>
            <tr>
              <th scope="row">ID:</th>
              <td>{id}</td>
            </tr>
            <tr>
              <th scope="row">Name:</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th scope="row">Description:</th>
              <td>{description}</td>
            </tr>
            <tr>
              <th scope="row">Min. Required Age:</th>
              <td>{age}</td>
            </tr>
            <tr>
              <th scope="row">Wood Cost:</th>
              <td>{cost.Wood}</td>
            </tr>
            <tr>
              <th scope="row">Gold Cost:</th>
              <td>{cost.Gold}</td>
            </tr>
            <tr>
              <th scope="row">Build Time:</th>
              <td>{buildTime}</td>
            </tr>
            <tr>
              <th scope="row">Reload Time:</th>
              <td>{reloadTime}</td>
            </tr>
            <tr>
              <th scope="row">Hit Points:</th>
              <td>{hitPoints}</td>
            </tr>
            <tr>
              <th scope="row">Attack:</th>
              <td>{attack}</td>
            </tr>
            <tr>
              <th scope="row">Accuracy:</th>
              <td>{accuracy}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnitDetail;
