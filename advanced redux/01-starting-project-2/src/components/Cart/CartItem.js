import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartItemsActions } from "../../store/cart";

const CartItem = (props) => {
  const { title, amount, price } = props.item;
  const total = amount * price;
  const dispatch = useDispatch();

  const onAddItemHandler = () => {
    dispatch(cartItemsActions.addItem(props.item));
  };

  const onRemoveItemHandler = () => {
    dispatch(cartItemsActions.removeItem(props.item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={onRemoveItemHandler}>
            -
          </button>
          <button type="button" onClick={onAddItemHandler}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
