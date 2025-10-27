import React from 'react'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://cdn-01.cms-ap-v2i.applyflow.com/hudson-sg-2022/wp-content/uploads/2023/05/Hudson-website-internal-page-imagery-13.png')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}}
       >
           <div className="container-fluid row align-items-center"style={{width:'100%',height:'100vh'}}>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 shadow border py-5 rounded mt-5 text-center"style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
                    <h3>Designed to get hired</h3>
                    <h4>Your skill,your story your next job -all in one</h4>
                    <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>make your Resume</Link>
                </div>
                <div className="col-md-4"></div>
              </div>
           </div>
          
      </section>
      {/* tools */}
      <section className="m-5">
        
          <h1 className='text-center'>Tools</h1>
          
            <div className=" container-fluid row align-items-center">
              <div className="col-md-6 ">
                <div className='my-3'>
                  <h4>Resume</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet repellat illum veniam, assumenda nisi! Rem deleniti fugit </p>
                </div>
               <div className="my-3">
                  <h4>Cover Letter</h4>
                  <p>Easily write Professional coverLetters </p>
               </div>
                <div className="my-3">
                  <h4>Jobs</h4>
                  <p>Automatically recieve new and relevant job postings</p>
                </div>
                <div className="my-3">
                  <h4>Applications</h4>
                  <p>Effortlessly manage and </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center pb-4">
                <img width={'75%'}src="https://www.livecareer.com/lcapp/uploads/2023/10/resume-format-banner-destop.png
                " alt="" />
              </div>
           
          </div>
        
      </section>
      {/* img */}
      <section>
        <div className="img-fluid"style={{backgroundImage:"url('https://www.blockadvisors.com/resource-center/wp-content/uploads/2023/07/What-is-a-Corporation-1024x536.jpg')",backgroundSize:'cover',backgroundAttachment:'fixed',height:'100vh',backgroundPosition:'center'}}></div>
      </section>
      {/* testimony*/}
      <section className='m-5'>
        <h2 className="text-center">Testimonials</h2>
        <div className="container-fluid row">
          <div className="col-md-6">
            <h3>Trusted by professionals worldwide.</h3>
            <p className='fs-5 text-justify'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='fs-5 text-justify'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>
            <p className='fs-5 text-justify'>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
            
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="row my-2">
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>

              </div>
              <div className="row my-2">
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>

              </div>
              <div className="row my-2">
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>

              </div>
              <div className="row my-2">
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>

                <div className="col-3">
                  <img width={'100%'} src='https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage