import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div> 
      <div style={{ height: '300px',backgroundColor:'purple' }} className="d-flex flex-column justify-content-center align-items-center text-white gap-1">
        <h1>Contact Us</h1>
        <h5><MdAttachEmail />yourname@gamil.com</h5>
        <h5><FaSquarePhone />3423342345</h5>
        <h4>Connect With Us</h4>
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <h5 className='fs-1'><FaSquareWhatsapp /></h5>
          <h5 className='fs-1'><FaInstagramSquare /></h5>
          <h5 className='fs-1'><FaFacebookSquare /></h5>
        </div>
        <p>Designed &amp; Build <FaHeart className="text-danger" /> with  react</p>
      </div>
      </div>
  )
}

export default Footer