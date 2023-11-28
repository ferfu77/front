import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Hero from "../components/Hero";
import RecuperoImg from "../assets/2.jpg";

function RecuperoContrasena(){

    const paperStyle={padding :30,height:'60vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <>
        <Hero
        cName="hero-mid"
        heroImg={RecuperoImg}
        title="Recuperar Contraseña"
        btnClass="hide"
        />
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockResetIcon/></Avatar>
                    <h2>Recuperar Contraseña</h2>
                    Ingresá el correo electrónico con el que te registraste y te enviaremos instrucciones para restablecer tu contraseña.
                    <Typography variant="h3" gutterBottom component="div"></Typography>
                </Grid>
                <TextField label='Email' placeholder='Ingrese su mail' type="email" fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Enviar correo electrónico</Button>
            </Paper>
        </Grid>
        </>
    )
}

export default RecuperoContrasena