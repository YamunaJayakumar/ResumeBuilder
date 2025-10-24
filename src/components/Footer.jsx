import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div> 
      <div style={{ height: '300px' }} className="d-flex flex-column justify-content-center align-items-center bg-warning">
        <h1>Contact Us</h1>
        <h5><MdAttachEmail />yourname@gamil.com</h5>
        <h5><FaSquarePhone />3423342345</h5>
        <h4>Connect With Us</h4>
        <div className='d-flex justify-content-center align-items-center gap-2'>
          <h5><FaSquareWhatsapp /></h5>
          <h5><FaInstagramSquare /></h5>
          <h5><FaFacebookSquare /></h5>
        </div>
        <p></p>
      </div>
      </div>
  )
}

export default Footer