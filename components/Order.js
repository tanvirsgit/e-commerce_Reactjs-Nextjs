import Link from "next/link";
import { useRouter } from "next/router";

const Order = ({ value, index }) => {
  return (
    <div className="row m-2 order">
      <div className="col-md-4 m-2">
        <p>Order id: {index}</p>
      </div>
      <div className="col-md-4 m-2">
        <p>Order Time: {value.date}</p>
      </div>
    </div>
  );
};

export default Order;
