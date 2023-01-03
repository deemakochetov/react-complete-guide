import { useDispatch, useSelector } from "react-redux";
import { cartItemsActions } from "../../store/cart";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  const showCart = useSelector((state) => state.showCart);
  const dispatch = useDispatch();
  const amount = Object.keys(cartItems).reduce(
    (accumulator, key) => accumulator + cartItems[key].amount,
    0
  );

  const toggleCart = () => {
    if (!showCart) dispatch(cartItemsActions.showCart());
    else dispatch(cartItemsActions.hideCart());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
