// fake data
import products from "../../../utils/data/products";

export default function data(req, res) {
  const {
    query: { id },
  } = req;

  const product = products.find((x) => x.id === id);
  res.status(200).json(product);
}
