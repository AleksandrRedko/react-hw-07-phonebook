import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";

import { changeFilter } from "../../redux/sliceFilter";
import s from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={filter.request} onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;
