import React from 'react'
import Gs1Bg from "../images/bgGs14.png";

const JumbotronComponents = () => {
  return (
    <React.Fragment>
      <div className=' position-relative overflow-hidden gs1Box'>
          
          <div className="gs1ImgBox mx-lg-5">
            <img alt='' src={Gs1Bg} className="d-block"/>
          </div>
          <div className="gs1TextBox">
            <h1>Want your <br/> product to <br/> Appear here?</h1>
            <span className='fw-light'>We have an average of 3k view daily</span>
          </div>
          
        </div>

    </React.Fragment>
  )
}

export default JumbotronComponents
