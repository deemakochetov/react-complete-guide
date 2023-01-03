/* eslint-disable array-callback-return */
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "2",
    title: "Test2",
    price: 8,
    description: "This is a second product - better!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            item={{
              title: product.title,
              price: product.price,
              description: product.description,
              id: product.id,
            }}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
