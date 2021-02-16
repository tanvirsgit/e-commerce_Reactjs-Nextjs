import { useRouter } from "next/router";
import { order } from "../../orderdata";

const OrderDetails = ({ o }) => {
  const id = useRouter().query.id;
  const or = order.filter((ord, index) => {
    if (id == index) return ord;
  });

  console.log(order);
  const currentOrder = or[0];
  if (!currentOrder) return <div>No orders</div>;
  return (
    currentOrder && (
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <h2>Ordered by</h2>
            <hr />
            <p>Name: {currentOrder.user.name}</p>
            <p>Phone: {currentOrder.user.phone}</p>
            <p>Address: {currentOrder.user.address}</p>
          </div>
          <div className="col-md-4">
            <h2>Products details</h2>
            <hr />
            <div>
              {currentOrder.newCart.map((c) => {
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
            <h3>Total Price: {currentOrder.total}</h3>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderDetails;

export async function getServerSideProps(context) {

  const id = parseInt(context.params.id);
  const or = order.filter((ord, index) => {
    if (id === index) return ord;
  });
  const o = { ...or[0] };

  return {
    props: {
      o,
    },
  };
}
