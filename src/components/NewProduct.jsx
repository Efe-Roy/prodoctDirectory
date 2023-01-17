import React from 'react'
import CardComp from './CardComp';
import img1 from '../images/product/img1.png';
import { useProductContext } from '../context/productContext';


const NewProduct = () => {
    let { hits } = useProductContext();
  return (
    <div className=''>
        <div className="row">
            {hits.map((row)=>(
                <div className="col-md-3 col-12  mb-2" key={row.id}>
                    <CardComp gtin={row.gtin} brandname={row.brandname} id={row.id} img={img1}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default NewProduct