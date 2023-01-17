import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./prodtail.css";
import { getbyid } from "../../constant";
import axios from "axios";

export default function ProdDetailPage() {
  const { id } = useParams();
  let [state, setState] = useState();

  const fecthDataById = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // to call teh api func
  useEffect(() => {
    fecthDataById(`${getbyid}/${id}`);
    console.log("test");
  }, []);

  // console.log(id);
  console.log("qwerty", state?.brickCategory);

  return (
    <>
      <div className="container my-4">
        <div className="product-div">
          <div className="p-5">
            <>
              <img
                src="#"
                className="imgg"
                alt="main image...."
                height="300"
                width="500"
              />
            </>
          </div>
          <div className="p-5">
            <span className="product-name d-block">{state?.brandname}</span>
            {/* <span className="product-name d-block">state.brandname</span> */}
            <span className="product-price d-block">{state?.gtin}</span>
            <p className="product-description">{state?.productdescription}</p>
            {/* <p className="product-description">{state?.brickCategory}</p> */}
            <button className="border-0 rounded btn btn-lg shadow-sm">
              <Link to="/" className="text-decoration-none">
                &larr; Back
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
