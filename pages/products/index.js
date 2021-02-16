import { useState } from "react";
import Product from "../../components/Product";

const Products = ({ products }) => {
  const [product, setProduct] = useState(products);
  let p = [];

  let product1 = [...product];
  while (product1.length) p.push(product1.splice(0, 5));
  return (
    product && (
      <div className="container">
        {p.map((subarray) => {
          return (
            <div key={subarray[0].about} className="row">
              {subarray.map((s) => {
                return <Product key={s.id} product={s} />;
              })}
            </div>
          );
        })}
      </div>
    )
  );
};

export default Products;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
};
