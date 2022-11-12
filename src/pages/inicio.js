import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';



export default function Inicio() {

    return (
        <>
            <Mui.Container >

                <Mui.Stack direction="column" justifyContent="center" alignItems="center" spacing={2} height='100vh'>

                    <Mui.Typography color='white' variant="h1" fontSize="2rem" fontFamily='Nunito'>
                        Conheça o Sistema Solar! Utilize o
                        <Mui.Typography variant="h1" fontSize="3rem" fontFamily='Nunito' color='#F9AD1A'>
                            Solar Explorer
                        </Mui.Typography>
                    </Mui.Typography>

                    <img className='efeito-flutuante' width="100%" src="astronauta.png" alt='astronauta' />

                    <Link style={{ textDecoration: 'none' }} to='/planetas'>
                        <Mui.Button variant="contained" size='large'>Vamos lá!</Mui.Button>
                    </Link>

                </Mui.Stack>
            </Mui.Container>

        </>
    )
}