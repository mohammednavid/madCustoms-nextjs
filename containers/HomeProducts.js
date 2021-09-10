import Card from "../components/Card";
import products from "../utils/data/products";

const HomeProducts = () => {
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} 
          id={product.id}
          src={product.images}
          by={product.by}
          ratings={product.ratings}
          price={product.price}
          {...product}
        />
      ))}
    </>
  );
};

export default HomeProducts;
