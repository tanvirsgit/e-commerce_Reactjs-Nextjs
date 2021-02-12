import { products } from "../../../data";

export default function handler(req, res) {
  const id = parseInt(req.query.id);
  console.log("HTTP method " + req.method);
  if (req.method === "GET") {
    const product = products.filter((p) => p.id === id);
    if (product.length > 0) res.status(200).json(product[0]);
    else res.status(404).json({ message: "Error" });
  } else if (req.method === "PATCH") {
    const q = req.body.quantity;
    products.map((p) => {
      if (p.id == id) {
        p.quantity = q;
        console.log(typeof q);
      }
    });
    res.status(200).json({ msg: "Success" });
  }
}
