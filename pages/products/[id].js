import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartWrapper";
import { products } from "../../data";

const product = ({ p }) => {
  const { cart, setCart } = useContext(CartContext);
  let newCart = [...cart];
  const [product, setProduct] = useState(p);
  useEffect(() => {
    fetch("http://localhost:3000/api/products/" + product.id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: product.quantity }),
    });
  }, [product]);
  return (
    product && (
      <div className="container">
        <div className=" detail card text-center">
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">{product.about}</p>
            <p className="card-text">Available Quantity:{product.quantity}</p>
          </div>
          <div className="card-body">
            <button
              disabled={product.quantity == 0 ? true : false}
              onClick={() => {
                setProduct({
                  name: product.name,
                  price: product.price,
                  about: product.about,
                  quantity: product.quantity - 1,
                  id: product.id,
                });
                newCart.push({
                  name: product.name,
                  price: product.price,
                  about: product.about,
                  quantity: 1,
                  id: product.id,
                });
                setCart(newCart);
              }}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default product;

export const getStaticProps = async (context) => {
 
  const id= parseInt(context.params.id);
  const product = products.filter(product=> product.id == id);

  const p= product[0];
  return {
    props: {
      p,
    },
  };
};

export const getStaticPaths = async () => {
  const data = products;
  const ids = data.map((d) => d.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  const a = [];

  return {
    paths,
    fallback: false,
  };
};

