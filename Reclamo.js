
import Hero from "../components/Hero";
import LoginImg from "../assets/2.jpg";
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import "../components/ReclamoStyles.css";

function Reclamo(){
    const paperStyle={padding :30,height:"100%",width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <>
        <Hero
        cName="hero-mid"
        heroImg={LoginImg}
        title="Generar Reclamo"
        btnClass="hide"
        />
        <Grid direction="column"  justifyContent="space-evenly" alignItems="center" >
            <Paper elevation={10} style={paperStyle} >
            <Grid align='center'>
                    <h2>Ingresa tus datos</h2>
                </Grid>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                 <TextField label='Nombre' placeholder='Nombre' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Apellido' placeholder='Apellido' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Email' placeholder='Ingrese su mail' type='email' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Numero de telefono' placeholder='Numero de telefono' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField
                 id="filled-multiline-static"
                 label="Mensaje"
                 placeholder="Mensaje"
                 multiline
                 rows={4}
                 fullWidth required
                />
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <div className='buttones'>
                <Button className="titulo" type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                    Enviar Reclamo
                </Button>
                </div>
            </Paper>
        </Grid>
        </>
    )
}



export default Reclamo;