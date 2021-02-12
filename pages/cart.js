import React, { Suspense, useContext } from "react";
import { CartContext } from "../context/CartWrapper";
import { useRouter } from "next/router";

const CartList = React.lazy(() => import("../components/CartList"));

Suspense;
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const router = useRouter();

  let newCart = minifyCart(cart);
  let totalPrice = 0;

  newCart.map((c) => (totalPrice += c.price * c.quantity));

  const handleOnProceed = () => {
    router.push("/checkout");
  };

  if (newCart.length == 0) return <h2>Cart is empty...</h2>;

  return (
    newCart && (
      <div>
        {newCart.map((c) => {
          return (
            <div>
              <Suspense fallback={<div>Loading cart.....</div>}>
                <CartList key={c} c={c} />;
              </Suspense>
            </div>
          );
        })}
        {newCart.length > 0 ? (
          <div className="cartText">
            <p>Total Price is {totalPrice}</p>
            <button onClick={handleOnProceed} className="btn btn-primary">
              Proceed to checkout
            </button>
          </div>
        ) : null}
      </div>
    )
  );
};

export default Cart;

export const minifyCart = (cart) => {
  let m = new Map();
  for (let i = 0; i < cart.length; i++) {
    m[cart[i].id] = (m[cart[i].id] || 0) + 1;
  }

  let newCart = [];
  let check = new Map();

  for (let i = 0; i < cart.length; i++) {
    if (!check[cart[i].id] && m[cart[i].id]) {
      check[cart[i].id] = 1;
      cart[i].quantity = m[cart[i].id];
      newCart.push(cart[i]);
    }
  }
  return newCart;
};
