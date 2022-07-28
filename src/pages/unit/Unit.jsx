import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getUnitsFetch } from '../../features/unitSlicer';
import './Unit.scss';

function Unit() {
  /* eslint implicit-arrow-linebreak: ["error", "beside"] */
  const units = useSelector((state) => state.units.units);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    dispatch(getUnitsFetch());
  }, [dispatch]);
  // console.log(units.units[0].cost.Wood);

  // const dark = units.units.filter((unit) => unit.age === 'Dark');
  // const feudal = units.units.filter((unit) => unit.age === 'Feudal');
  // const castle = units.units.filter((unit) => unit.age === 'Castle');
  // const imperial = units.units.filter((unit) => unit.age === 'Imperial');

  return (
    <div className="container">
      <div>
        <h5>Ages</h5>
        <ul className="nav nav-tabs p-2 ">
          <li className="nav-item">
            <button type="button" className="nav-link " aria-current="page">
              All
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link">
              Dark
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link">
              Feudal
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link">
              Castle
            </button>
          </li>
          <li className="nav-item">
            <button type="button" className="nav-link">
              Imperial
            </button>
          </li>
        </ul>
        <div className="d-flex flex-column gap-2 justify-content-center">
          <h5>Costs</h5>

          <label htmlFor="wood" className="p-1">
            <input type="checkbox" id="wood" className="mx-2" />
            Wood
            <input type="range" className="mx-4" id="wood" step="1" min="0" max={200} onChange={handleChange} />
          </label>

          <label htmlFor="food" className="p-1">
            <input type="checkbox" id="food" className="mx-2" />
            Food
            <input type="range" className="mx-4" id="food" step="1" min="0" max={200} onChange={handleChange} />
          </label>

          <label htmlFor="gold" className="p-1">
            <input type="checkbox" id="gold" className="mx-2" />
            Gold
            <input type="range" className="mx-4" id="gold" step="1" min="0" max={200} onChange={handleChange} />
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
        <tbody key={units.id}>
          {units.units?.map((unit) => (
            <tr>
              <th scope="row">
                {unit.id}
                {' '}
              </th>
              <td>{unit.name}</td>
              <td>{unit.age}</td>
              <td>
                {unit.cost?.Wood && `Wood: ${unit.cost?.Wood} `}
                {' '}
                {unit.cost?.Gold && `Gold: ${unit.cost?.Gold} `}
              </td>
              <td>
                <button onClick={() => navigate('/unit-detail')} type="button" className="btn btn-secondary">
                  Unit Detail
                </button>
                {' '}
              </td>
            </tr>
          ))}
          ;

        </tbody>
      </table>

    </div>
  );
}
export default Unit;
