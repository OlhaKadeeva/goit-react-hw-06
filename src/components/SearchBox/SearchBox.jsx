import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  return (
    <div className={css.wraper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
export default SearchBox;
