import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartWrapper";

const NavBar = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href={"/products"} className="navbar-brand">
          <a className="navLink">ReactSHOP</a>
        </Link>
        <div className="navbar-nav">
          <Link href={"/cart"} className="nav-link">
            <a className="navLink">{`Cart (${cart.length})`}</a>
          </Link>
          <Link href={"/orders"}>
            <a className="nav-link">My Orders</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
