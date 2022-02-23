import { Button, Checkbox, FormControlLabel, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import { Avatar } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { TextField } from '@mui/material';
import '../login.scss'

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Button className='button' type='submit'  variant='contained' style={btstyle} fullWidth>Sign In</Button>
                <Typography>
                    <Link href="#" >
                        Forgot password?
                    </Link>
                </Typography>
                <Typography> Do you have an account? 
                    <Link href="#" >
                        Sign Up 
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login
