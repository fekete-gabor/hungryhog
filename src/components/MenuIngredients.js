import { AiFillCloseCircle } from "../utils/icons";
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

  const { ingredients } = item;

  return currentIngredient === ingredients ? (
    <div>
      <a
        href="#menu"
        className="menu-item-btn current"
        onClick={() => dispatch(clearCurrentIngredient())}
      >
        {ingredients}
        <AiFillCloseCircle />
      </a>
    </div>
  ) : (
    <div className="">
      <a className="menu-item-btn" onClick={() => handleChange(ingredients)}>
        {ingredients}
      </a>
    </div>
  );
};

export default MenuIngredients;
