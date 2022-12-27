import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BeatLoader } from "react-spinners";
//Navigation Bar
import NavBar from "../components/NavBar";

function ProductDetailPage() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  console.log(productDetails);
  console.log(params.id);
  //API call For Product
  const getData = async () => {
    try {
     setLoading(true)
      const result = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setProductDetails(result.data);
      setLoading(false)
    } catch (error) {
        setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="container-fluid">
      <NavBar />
      {loading ? (
        <BeatLoader size={50}/>
      ) : (
        <div className="product-detail">
          <div className="product__left">
            <img
              src={productDetails !== null && productDetails.image}
              alt="ProductImage"
              className="productImg"
            />
          </div>
          <div className="product__right">
            <h1 className="productName">
              {productDetails !== null && productDetails.title}
            </h1>
            <p className="productprice">{`Rs. ${
              productDetails !== null && productDetails.price
            }`}</p>
            <p className="productDesc">
              {productDetails !== null && productDetails.description}
            </p>
            <p className="productCat">
              Category:{" "}
              <b>{productDetails !== null && productDetails.category}</b>
            </p>
            <button className="btn btn-success buttonBuy">Buy Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
