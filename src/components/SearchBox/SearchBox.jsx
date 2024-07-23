import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  return (
    <input
      type="text"
      value={filterValue}
      onChange={(event) => dispatch(changeFilter(event.target.value))}
    />
  );
}
