import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoCloseSharp } from "react-icons/io5";
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Educational Details','Work Experience','Skills & Certifications','Review & Submit'];

function UserInput() {
// array for repeated items in skills
 const skillSuggestionArray=['NODE JS','MONGODB','EXPRESS JS','REACT','JS','HTML','CSS','ANGULAR','JAVA','C','C++','PYTHON']
 const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

// create function for stpes 
const renderSteps =(stepCount)=>{
  switch(stepCount){
    case 0:return(
        <div>
            <h3>Personal Details</h3>
            <div className="row p-3">
                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                <TextField id="standard-basic-location" label="Location" variant="standard" />
            </div>
            </div>
    )
  
    case 1:return(
        <div>
            <h3>Contact Details</h3>
            <div className="row p-3">
              <TextField id="standard-basic-email" label="Email" variant="standard" />
              <TextField id="standard-basic-phonenumber" label="Phone Number" variant="standard" />
              <TextField id="standard-basic-Github" label="Github Profile Link" variant="standard" />
              <TextField id="standard-basic-Linkedin" label="Linkedin Profile Link" variant="standard" />
              <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
            </div>
            
                
            </div>
    )
    case 2:return(
        <div>
            <h3>Educational Details</h3>
            <div className="row p-3">
                <TextField id="standard-basic-coursename" label="Course Name" variant="standard" />
                <TextField id="standard-basic-collegename" label="College Name" variant="standard" />
                
                <TextField id="standard-basic-university" label="Unniversity" variant="standard" />
                <TextField id="standard-basic-yearofpassout" label="Year Of Passout" variant="standard" />

            </div>
            </div>
    )
    case 3:return(
        <div>
            <h3>Professional Details</h3>
               <div className="row p-3">
                <TextField id="standard-basic-joborinternship" label="job or Internship" variant="standard" />
                <TextField id="standard-basic-companyname" label="Company Name" variant="standard" />
                <TextField id="standard-basic-companylocation" label="Company Location" variant="standard" />
                <TextField id="standard-basic-duration" label="Duration" variant="standard" />

            </div>
            </div>
    )
    case 4:return(
        <div>
            <h3>Skills</h3>
            <div className="d-flex justify-content-between align-items-center p-3 w-100">
             <input type="text" placeholder='Add Skills' className="form-control" />
             <Button variant="text" >ADD</Button>
            </div>
            <h5>Suggestions</h5>
            <div className="d-felx justify-content-between flex-wrap my-3">
              {
                skillSuggestionArray.map((item,index)=>(
                  <Button key={index} variant="outlined" className="m-2">{item}</Button>
                ))
              }
            </div>
            <h5>Added Skills</h5>
            <div className="d-felx justify-content-between flex-wrap my-3">
               <Button variant="contained" className="m-1">NODE JS <IoCloseSharp className="ms-2 cursor-pointer  " /></Button>
               

            </div>
            </div>
    )
    case 5:return(
        <div>
            <h3>Summary</h3>
            <div className="p-3 row">
                 <TextField id="standard-summary" label="write a short summary of yourself" variant="standard" multiline rows={7}
                 defaultValue={'Enthusiastic and detail-oriented MERN Stack Developer with a strong foundation in building responsive and dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Passionate about leveraging modern technologies to solve real-world problems and deliver efficient, maintainable solutions. Skilled in developing full-stack applications from concept to deployment and eager to contribute to a collaborative, growth-oriented development team.'}/>
            </div>
            </div>
    )
    default : return null
  }
}


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
            {/* typography-give text-content */}
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>


          {/*  to render contents according to the steps ,div=box in material ui*/}
          <Box > 
            {renderSteps(activeStep)}      
              </Box>



          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>           
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default UserInput