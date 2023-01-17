import React from 'react'
import { useNavigate } from "react-router-dom"


const CardComp = (props) => {
  let navigate = useNavigate();
    
    const moveClick = (id) => {
      navigate(`/${id}`)
      console.log(id)
  }
  
  return (
    <div className='text-center'>
      <div className="card shadow rounded-0 p-1" style={{height: "227px"}} onClick={()=>moveClick(props.id)}>
        <div className=''>
          <img src={props.img}
            className="card-img-top img-fluid"
            alt="..."
            style={{ width: "190px", height: "106px", objectFit: "contain" }}
          />
        </div>
            <div className="card-body">
              <p className="card-text">{ props.gtin}</p>
              <p className="card-text">{ props.brandname}</p>
            </div>
      </div>
    </div>
  )
}

export default CardComp