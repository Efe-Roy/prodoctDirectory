import React, {useState, useEffect} from 'react'
import MostLikedComp from '../components/MostLikedComp'
import IdentiferComp from '../components/IdentiferComp'
import PromotionComp from '../components/PromotionComp'
import PromoPaginate from '../components/PromoPaginate'
import { useProductContext } from '../context/productContext';

const LikePromoPage = () => {
  const { hits, isLoading } = useProductContext();

  return (
    <React.Fragment>
        <div className="container" style={{maxWidth: "97%"}}>
            <div className="row g-2 my-1">
                <div className="col-sm-3" >
                    <div className="d-flex bd-highlight mb-4">
                        <div className="me-auto bd-highlight">Most Liked</div>
                    </div>
                        <>
                            <MostLikedComp/>
                        </>
                </div>
            
                <div className="col-sm-9 col-lg-9 col-md-9">
                    
                    <div className="d-flex bd-highlight mb-1">
                        <div className="me-auto bd-highlight">Promotional Item</div>
                        <PromoPaginate/>
                    </div>
                    {isLoading ? (
                        <h1>Loading....</h1>
                        ): (
                        <PromotionComp currentPosts={hits} />
                    )}
                    
                    <IdentiferComp/>
                </div>
                
            </div>
        </div>
    </React.Fragment>
  )
}

export default LikePromoPage