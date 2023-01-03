import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartItemsActions } from "../../store/cart";

const ProductItem = (props) => {
  const { title, price, description } = props.item;

  const dispatch = useDispatch();

  const onAddItemHandler = () => {
    dispatch(cartItemsActions.addItem(props.item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick={onAddItemHandler}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
