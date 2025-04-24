// import css from "./SearchBox.module.css";
// const SearchBox = ({ value, onChange }) => {
//   return (
//     <div className={css.wraper}>
//       <p className={css.text}>Find contacts by name</p>
//       <input
//         className={css.input}
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// export default SearchBox;

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
};
export default SearchBox;
