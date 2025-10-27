import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ResumeGenerator() {
  return (
    <>
    
    <div className="container-fluid">
      <h2 className="text-center mt-5 ">Create a Job -Winnning Resume in Minutes</h2>
      <div className="row justify-content-center align-items-center"style={{height:'60vh'}}>
        <div className="col-md-1"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center">
          <IoDocumentTextOutline className="text-primary fs-2 mb-3" />
          <h4>Add your Information</h4>
          <p>Add pre -written examples to each section</p>
          <h5>step-1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 border rounded shadow p-5 text-center">
          <FaCloudDownloadAlt className="fs-1 mb-3 text-danger" />
          <h4>Download your resume</h4>
          <p>Dowload and start applying</p>
          <h5>step-2</h5>
        </div>
        <div className="col-md-1"></div>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <Link to="/userform" className=" btn text-light mb-5 "style={{backgroundColor:'purple'}}>LET'S START</Link>
      </div>
    </div>
    </>
  )
}

export default ResumeGenerator