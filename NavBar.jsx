import { AppBar, Toolbar, Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <AppBar position ="sticky" sx={{top: 'auto', bottom: 0}}>
            <Toolbar>
                <Typography variant='button' sx={{ flexGrow: 1}} align='left'>APP</Typography>
                <Button variant='text'><Link to='/first'>Home</Link></Button>
                <Button variant='text'><Link to='/student'>Student</Link></Button>
                <Button variant='text'><Link to='/signin'>Sign In</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar