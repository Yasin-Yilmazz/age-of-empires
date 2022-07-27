import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUnitsFetch } from '../../features/unitSlicer';
import './Unit.scss';

function Unit() {
  /* eslint implicit-arrow-linebreak: ["error", "beside"] */
  const units = useSelector((state) => state.units.units);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitsFetch());
  }, [dispatch]);
  console.log(units.units);

  return (
    // <div>unit</div>
    <div>
      {units.units?.map((unit) => (
        <div key={unit.id}>
          {unit.name}
        </div>
      ))}
      ;
    </div>
  );
}
export default Unit;
