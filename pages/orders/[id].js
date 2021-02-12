import { useRouter } from "next/router";
import { order } from "../../orderdata";

const OrderDetails = () => {
  const id = useRouter().query.id;
  let o = order.filter((ord, index) => {
    if (id == index) return ord;
  });

  console.log(o);

  return (
    o[0] && (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <h2>Ordered by</h2>
            <hr />
            <p>Name: {o[0].user.name}</p>
            <p>Phone: {o[0].user.phone}</p>
            <p>Address: {o[0].user.address}</p>
          </div>
          <div className="col-md-4">
            <h2>Products details</h2>
            <hr />
            <div>
              {o[0].newCart.map((c) => {
                return (
                  <div>
                    <p>Product name: {c.name}</p>
                    <p>Product Quantity: {c.quantity}</p>
                    <p>Product Price: {c.price}</p>
                    <hr />
                  </div>
                );
              })}
            </div>
            <h3>Total Price: {o[0].total}</h3>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderDetails;
