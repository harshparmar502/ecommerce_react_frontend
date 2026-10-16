import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useLayoutEffect(() => {

    async function loadProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }

    loadProduct();

  }, [id]);

  
if (!product) {
  return <div className="container mt-4">Loading...</div>;
}

return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <h4>${product.price}</h4>
    </div>
  );
}

export default ProductDetails;