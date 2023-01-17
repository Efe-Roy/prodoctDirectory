import React from 'react';
import DiscountComp from '../components/DiscountComp'
import FeaturedComp from '../components/FeaturedComp'
import PaginationComp from '../components/PaginationComp';
import NewProduct from '../components/NewProduct'
import { useProductContext } from '../context/productContext';


const CategoryPage = () => {
  const { isLoading } = useProductContext();
    
  return (
    <React.Fragment>
      <div className="container" style={{maxWidth: "97%"}}>
        <div className="row g-2 my-2">
          <div className="col-sm-3" >
            <div className="p-3 border gs1DiscountMain">
              <DiscountComp/>
            </div>
          </div>
          
          <div className="col-sm-9 col-lg-9 col-md-9">
            <div className="">
              <span className='p-0 fw-bold' style={{fontSize: "15px"}}>Feature Category</span>
              <div className='bg-white px-3 shadow-sm'>
                <FeaturedComp />
              </div>
              <div className='mt-2'>
                <div className="d-flex flex-row-reverse bd-highlight my-1">
                  <PaginationComp />
                  <div className="p-2 bd-highlight">Top Manufacturers</div>
                  <div className="p-2 bd-highlight">New Product</div>
                </div>
                {isLoading ? (
                  <h1>Loading....</h1>
                ): (
                  <NewProduct />
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CategoryPage