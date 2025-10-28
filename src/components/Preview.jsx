import { Divider, Button } from '@mui/material'
import React from 'react'
function Preview() {
  return (
    <div style={{ marginTop: '70px' }} className="p-5 w-100 rounded shadow text-center">
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6>
        <span className="mx-2">Location</span>|
        <span className="mx-2">E mail</span>|
        <span className="mx-2">Mobile</span>
      </h6>
      <p className="my-3">
        <a href="" target="_blank">GITHUB</a>|
        <a href="" target="_blank">LINKEDIN</a>|
        <a href="" target="_blank">PORTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
      <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quas eaque ratione, veritatis explicabo repudiandae, delectus vel quisquam exercitationem vero enim ducimus ipsam accusamus. Non inventore quae atque accusantium alias!</p>
      <Divider sx={{ fontSize: '25px' }}>
        Education
      </Divider>
      <h6>Course Name</h6>
      <p>
        <span className="mx-2">College</span>|
        <span className="mx-2">University</span>|
        <span className="mx-2">Passout Year</span>
      </p>
      <Divider sx={{ fontSize: '25px' }}>
        Professional Expereience
      </Divider>
      <h6>Job/Internship</h6>
      <p>
        <span className="mx-2">Company Name</span>|
        <span className="mx-2">Company Location</span>|
        <span className="mx-2">Duration</span>
      </p>
      <Divider sx={{ fontSize: '25px' }}>
        Skills
      </Divider>
      <div className="d-felx justify-content-between flex-wrap">
        <Button variant="contained" className="m-1">NODE JS </Button>
         <Button variant="contained" className="m-1">NODE JS </Button>
          <Button variant="contained" className="m-1">NODE JS </Button>


      </div>
    </div>
  )
}

export default Preview