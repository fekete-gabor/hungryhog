import { AiOutlineClose } from "../utils/icons";
import { HashLink } from "react-router-hash-link";
import {
  filterByIngredient,
  changeCurrentIngredient,
  clearCurrentIngredient,
} from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuIngredients = ({ item }) => {
  const { currentIngredient } = useSelector((store) => store.menu);

  const dispatch = useDispatch();

  const handleChange = (ingredients) => {
    dispatch(filterByIngredient(ingredients));
    dispatch(changeCurrentIngredient(ingredients));
  };

  return currentIngredient === item ? (
    <div>
      <HashLink
        to="#menu"
        className="menu-item-btn current"
        onClick={() => dispatch(clearCurrentIngredient())}
      >
        {item}
        <AiOutlineClose />
      </HashLink>
    </div>
  ) : (
    <div>
      <button className="menu-item-btn" onClick={() => handleChange(item)}>
        {item}
      </button>
    </div>
  );
};

export default MenuIngredients;
