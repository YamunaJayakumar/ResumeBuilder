import React from 'react'
import { Link } from 'react-router-dom'



function Pnf() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center"style={{height:'90vh'}}>
      <img src="/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_2157908-removebg-preview.png" alt="" style={{width:'450px'}}/>
      <h1>Page Not Found</h1>
      <Link to={'/'} className="btn text-light" style={{backgroundColor:'purple'}}>Go to Home</Link>
    </div>
  )
}

export default Pnf