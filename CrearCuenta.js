import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Hero from "../components/Hero";
import LoginImg from "../assets/2.jpg";
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CrearCuenta(){

    const paperStyle={padding :30,height:'75vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [rol, setRol] = React.useState('');

    const handleChange = (event) => {
      setRol(event.target.value);
    };
    return(
        <>
        <Hero
        cName="hero-mid"
        heroImg={LoginImg}
        title="Registrarse"
        btnClass="hide"
        />
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar style={avatarStyle}><HowToRegIcon/></Avatar>
                    <h2>Crear cuenta</h2>
                    <Typography variant="h3" gutterBottom component="div"></Typography>
                </Grid>
                <TextField label='Nombre' placeholder='Ingrese su nombre' type='text' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Apellido' placeholder='Ingrese su apellido' type='text' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Mail' placeholder='Ingrese su mail' type='email' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <TextField label='Numero de telefono' placeholder='Ingrese su telefono' type='number' fullWidth required/>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <Box sx={{ minWidth: 120 }}>
                   <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={rol}
                        label="Rol"
                        onChange={handleChange}
                         >
                        <MenuItem value={10}>Propietario</MenuItem>
                        <MenuItem value={20}>Inquilino</MenuItem>
                        </Select>
                        </FormControl>
                </Box>
                <Typography variant="h3" gutterBottom component="div"></Typography>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth> Registrarse </Button>
            </Paper>
        </Grid>
        </>
    )
}

export default CrearCuenta