import React from 'react'
import JumbotronComponents from '../components/JumbotronComponents'

const JumbotronPage = () => {
  return (
    <React.Fragment>
      <div className="container" style={{maxWidth: "97%"}}>
        <div className="row g-2 mt-2">
          <div className="col-sm-3 gs1NavTopCat">
            <div className="p-3 border bg-light" style={{ height: "400px" }}>
              Category Column

              <ul class="list-group list-group-flush mt-4">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-9 col-lg-9 col-md-9">
            <div className="px-lg-3 border" style={{backgroundColor: "#e3e3e3"}}>
              <JumbotronComponents/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default JumbotronPage