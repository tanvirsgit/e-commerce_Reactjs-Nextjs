import Link from "next/link";
const Product = ({ product }) => {
  return (
    <div className="col-md-2 m-2">
      <div className="card">
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.price}</p>
          <p className="card-text">
            {"Available quantity: " + product.quantity}
          </p>
          <Link href={"/products/" + product.id} className="btn btn-primary">
            <a>See Details</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
