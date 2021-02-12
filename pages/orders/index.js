import { useState } from "react";
import Order from "../../components/Order";
import { order } from "../../orderdata";
import Link from "next/link";

const Orders = () => {
  const [orders, setOrder] = useState(order);

  if (orders.length == 0) return <h1>You dont have any order</h1>;
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="container">
      {orders.map((order, index) => {
        let u = order.user;
        if (
          u.name == user.name &&
          u.phone == user.phone &&
          u.address == user.address
        )
        return (
            <Link href={"/orders/" + index}>
              <a>
                <Order key={index} value={order} index={index} />
              </a>
            </Link>
          );
      })}
    </div>
  );
};

export default Orders;
