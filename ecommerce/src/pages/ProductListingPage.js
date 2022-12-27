import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";

//Navbar
import NavBar from "../components/NavBar";

//Product
import Product from "../components/Product";

function ProductListingPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="container-fluid productListing">
      <NavBar />
      <div className="homeProduct">
        <div className="headerHome">
          <h1>All Products</h1>
        </div>
        {loading ? (
          <BeatLoader size={50}/>
        ) : (
          <div className="products">
            {products.map((data) => {
              return <Product product={data} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
