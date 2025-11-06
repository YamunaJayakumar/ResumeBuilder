//page for display the finished resume
import React, { useEffect, useState } from 'react'
import Preview from '../components/Preview'
import { Link, useParams } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { MdSimCardDownload } from "react-icons/md";
import { IoRefreshCircle } from "react-icons/io5";
import { FaBackward } from "react-icons/fa6";
import Edit from '../components/Edit';

function ViewResume() {
  const {id}=useParams()
  console.log(id);
  const [resume,setResume]=useState({})
  useEffect(()=>{
   getResumeDetails()
  },[])

  const getResumeDetails=async()=>{
     const result=await getResumeAPI(id);
     console.log(result);
     if(result.status==200){
      setResume(result.data)
     }
  }
  return (
    <>
    
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items center ">
                  <button className="btn fs-4 text-primary"><MdSimCardDownload/></button>
                  <Edit resumeDetails={resume} setResumeDetails={setResume}/>
                  <Link to={'/history'} className="btn fs-4 text-primary"><IoRefreshCircle/></Link>
                  <Link to={'/resume'} className="btn fs-4 text-success"><FaBackward/></Link>
                </div>
                <Preview resumeDetails={resume}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
     
    </>
  )
}

export default ViewResume