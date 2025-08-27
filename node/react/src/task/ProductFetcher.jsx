import React, { useEffect, useState } from "react";

const ProductFetcher = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return <p> Please wait… fetching products for you.</p>;
  }

  return (
    <div>
      <h2> Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>💲 {product.price}</p>
          <img src={product.image} alt={product.title} width="100" />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductFetcher;
