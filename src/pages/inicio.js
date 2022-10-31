import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';



export default function Inicio() {

    return (
        <>
            <Mui.Container >

                <Mui.Grid height='100vh' container direction="column" justifyContent="center" alignItems="center">
                    <Mui.Grid item >
                        <Mui.Typography color='white' variant="h1" fontSize="2rem" fontFamily='Nunito'>Conheça o Sistema Solar! Utilize o
                            <Mui.Typography variant="h1" fontSize="3rem" fontFamily='Nunito' color='#F9AD1A'>Solar Explorer</Mui.Typography></Mui.Typography>
                    </Mui.Grid>

                    <Mui.Grid item >
                        <img width="100%" src="astronauta.png" alt='astronauta' />
                    </Mui.Grid>

                    <Link to='/planetas'>
                        <Mui.Button className="BtnPrincipal" component="a" variant="contained" size='large'>Vamos lá!</Mui.Button>
                    </Link>

                </Mui.Grid>
            </Mui.Container>

        </>
    )
}