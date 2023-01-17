import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useProductContext } from "../context/productContext";

function PromoPaginate() {
  const { getPrevPage, getNextPage } = useProductContext();
  
  return (
    <>
      
      <div
        className="d-flex bd-highlight justify-content-center fs-4 my-2 mx-1 bg-white"
        style={{ width: "25px", height: "25px", borderRadius: "50%" }}
        onClick={() => getNextPage()}
      >
        <AiFillCaretLeft />
      </div>
      <div
        className="d-flex bd-highlight justify-content-center fs-4 my-2 mx-1 bg-white"
        style={{ width: "25px", height: "25px", borderRadius: "50%" }}
        onClick={() => getPrevPage()}
      >
        <AiFillCaretRight />
      </div>
    </>
  );
}
export default PromoPaginate;
