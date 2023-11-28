import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Hero from "../components/Hero";
import LoginImg from "../assets/2.jpg";

const styles = {
    paperContainer: {
      backgroundPosition: "center",
        backgroundImage: `url(${Image})`
    }
};

const login=()=>{

    const paperStyle={padding :30,height:'65vh',width:300, margin:"10px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <>
        <Hero
        cName="hero-mid"
        heroImg={LoginImg}
        title="Iniciar Sesion"
        btnClass="hide"
        />
        <Grid direction="column"  justifyContent="space-evenly" alignItems="center" >
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar className="titulo" style={avatarStyle}><LockIcon/></Avatar>
                    <h2>Ingresa con tu cuenta</h2>
                </Grid>
                <form>
                <TextField label='Email' placeholder='Ingrese su mail' type='email' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Contraseña' placeholder='Ingrese su contraseña' type='password' fullWidth required/>
                <Button className="titulo" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth href='/dashboard'>
                    Iniciar Sesion
                </Button>
                <Typography >
                     <Link href="/recuperocontrasena" >
                     ¿Olvido su contraseña?
                </Link>
                </Typography>
                <Typography > ¿No tenés una cuenta? 
                     <Link href="/crearcuenta" >
                      Registrate
                </Link>
                </Typography>
                </form>
            </Paper>
        </Grid>
        </>
    )
}

export default login