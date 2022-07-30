/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getUnitsFetch } from '../../features/unitSlicer';
import './Unit.scss';

function Unit() {
  const [isWoodActive, setisWoodActive] = useState(false);
  const [isGoldActive, setisGoldActive] = useState(false);
  const [isFoodActive, setisFoodActive] = useState(false);
  const [filteredUnits, setFilteredUnits] = useState([]);
  const [filteredCost, setFilteredCost] = useState([]);

  const units = useSelector((state) =>
    state.units.units);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUnitsFetch());
  }, [dispatch]);

  const handleAllClick = () => {
    setFilteredUnits(units.units);
    setFilteredCost(units.units);
  };
  const handleDarkClick = () => {
    const dark = units.units?.filter((unit) =>
      unit.age === 'Dark');
    setFilteredUnits(dark);
    setFilteredCost(dark);
  };
  const handleFeudalClick = () => {
    const feudal = units.units?.filter((unit) =>
      unit.age === 'Feudal');
    setFilteredUnits(feudal);
    setFilteredCost(feudal);
  };
  const handleCastleClick = () => {
    const castle = units.units?.filter((unit) =>
      unit.age === 'Castle');
    setFilteredUnits(castle);
    setFilteredCost(castle);
  };
  const handleImperialClick = () => {
    const imperial = units.units?.filter((unit) =>
      unit.age === 'Imperial');
    setFilteredUnits(imperial);
    setFilteredCost(imperial);
  };
  const handleCostChange = (e) => {
    const filteredWood = (
      filteredUnits.length > 0 ? filteredUnits : units.units
    )?.filter(
      (unit) =>
        unit?.cost && unit?.cost[e.target.id] <= e.target.value,
    );
    setFilteredCost(filteredWood);
  };

  return (
    <div className="container">
      <div>
        <div className="ages">
          <h5 className="title">Ages</h5>
          <ul className="nav nav-tabs p-2 ">
            <li className="nav-item">
              <button
                type="button"
                className="nav-link "
                aria-current="page"
                onClick={handleAllClick}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link"
                onClick={handleDarkClick}
              >
                Dark
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link"
                onClick={handleFeudalClick}
              >
                Feudal
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link"
                onClick={handleCastleClick}
              >
                Castle
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="nav-link"
                onClick={handleImperialClick}
              >
                Imperial
              </button>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column gap-2 justify-content-center costs ">
          <h5>Costs</h5>
          <label htmlFor="wood" className="p-1">
            <input
              onClick={() =>
                setisWoodActive(!isWoodActive)}
              type="checkbox"
              id="wood"
              className="mx-1"
            />
            Wood
            <input
              type="range"
              disabled={!isWoodActive}
              className="mx-4"
              id="Wood"
              step="1"
              min="1"
              max="200"
              onChange={handleCostChange}
              name="foo"
            />
          </label>
          <label htmlFor="gold" className="p-1">
            <input
              onClick={() =>
                setisGoldActive(!isGoldActive)}
              type="checkbox"
              id="gold"
              className="mx-1"
            />
            Gold
            <input
              type="range"
              disabled={!isGoldActive}
              className="mx-4"
              id="Gold"
              step="1"
              min="0"
              max="200"
              onChange={handleCostChange}
            />
          </label>
          <label htmlFor="food" className="p-1">
            <input
              onClick={() =>
                setisFoodActive(!isFoodActive)}
              type="checkbox"
              id="food"
              className="mx-1"
            />
            Food
            <input
              type="range"
              disabled={!isFoodActive}
              className="mx-4"
              id="Food"
              step="1"
              min="0"
              max="200"
              onChange={handleCostChange}
            />
          </label>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Cost</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {((isWoodActive || isGoldActive || isFoodActive)
          && filteredUnits?.length !== 0
            ? filteredCost
            : filteredUnits?.length === 0
              ? units.units
              : filteredUnits
          )?.map((unit) =>
            (
              <tr key={unit.id}>
                <th scope="row">{unit.id}</th>
                <td>{unit.name}</td>
                <td>{unit.age}</td>
                <td>
                  {unit.cost?.Wood && `Wood: ${unit.cost?.Wood} `}
                  {unit.cost?.Gold && `Gold: ${unit.cost?.Gold} `}
                  {unit.cost?.Food && `Food: ${unit.cost?.Food} `}
                </td>
                <td className="text-center">
                  <button
                    onClick={() =>
                      navigate(`/unit-detail/${unit.id}`, { state: unit })}
                    type="button"
                    className="btn btn-secondary "
                  >
                    Unit Detail
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Unit;
