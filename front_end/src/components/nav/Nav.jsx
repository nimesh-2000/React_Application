import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
//import styled from '@emotion/styled';
// import { Link } from 'react-router-dom'
import './Nav.css';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';

 function Nav() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to={"/Hero"}>
          <IconButton id='home'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" id='nd' component="div" sx={{ flexGrow: 1 }}>
            ND Mobile
          </Typography>
          <Link to={"/Login"}>
          <Button id='cLogin' color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav;
