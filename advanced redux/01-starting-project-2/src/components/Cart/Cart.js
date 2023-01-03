/* eslint-disable array-callback-return */
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {Object.keys(cartItems).map((key) => (
          <CartItem
            item={{
              title: cartItems[key].title,
              amount: cartItems[key].amount,
              price: cartItems[key].price,
              id: key,
            }}
            key={key}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
