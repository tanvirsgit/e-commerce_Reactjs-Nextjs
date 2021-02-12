import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartWrapper";
import { minifyCart } from "./cart";
import { addOrder } from "../orderdata";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const { cart, setCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { name, phone, address };
    let newCart = minifyCart(cart);
    setCart([]);
    let total = 0;
    total = getTotalPrice(newCart);
    console.log("Total:" + total);
    let date = new Date().toUTCString();
    addOrder({ user, newCart, total, date });
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      router.push("/orders");
    }, 1000);
  };

  return (
    <form className="checkoutForm" onSubmit={handleSubmit}>
      <h2>Enter Your Informations</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone No.</label>
        <input
          type="phone"
          className="form-control"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <textarea
          className="form-control"
          rows="3"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary">Submit Order</button>
    </form>
  );
};

export default Checkout;

const getTotalPrice = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++)
    total += cart[i].quantity * cart[i].price;
  return total;
};
