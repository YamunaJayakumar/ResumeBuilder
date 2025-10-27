import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
  const projectInfo="A Resume Builder App is a web application that allows users to create, edit, and download professional resumes by filling out forms (like personal info, education, skills, and experience."

  return (
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img  width={'40px'}src="\pngtree-vector-resume-icon-png-image_956526-removebg-preview.png" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className="text-light text-decoration-none fw-bolder">rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}><Button color="inherit">ABOUT US</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header