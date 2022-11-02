import * as Mui from "@mui/material";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import ApiPlanetas from "../services/planetas";

export default function Detalhes() {
    
    const navigate = useNavigate();
    const { slug } = useParams();
    const [carregando, setCarregando] = useState(true);
    const [planeta, setPlaneta] = useState([]);


    useEffect(() => {
        (async () => {

            try {
                const respostaApi = await ApiPlanetas.obterUnico({ slug })
                if(respostaApi.length <= 0 ) {
                    navigate('/404')
                    return;
                }

                setPlaneta(respostaApi[0])
                setCarregando(false)


            } catch (error) {
                console.error(error);
                throw new Error(error)
            }

        })()
    }, [slug, navigate])


    function clickCompartilhar() {
        window.navigator.share({
            url: `${window.location.href}`,
            text: `Explore o Sistema Solar! Saiba mais curiosidades!`,
            title: `Conheça ${planeta.nome}!`
        })
    }


    return (<>

        {
            (carregando) ? (<>
                <Mui.Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
                    <Mui.CircularProgress sx={{ color: '#fff' }} size={100} />
                </Mui.Box>
            </>) : (<>

                <Mui.Container >
                    <Mui.Stack
                        mt={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1.5}
                    >

                        <img className="girar-planeta" src={planeta.imgUrl} alt={planeta.nome} />
                        <Mui.Typography gutterBottom variant="h5" component="h1">
                            {planeta.nome}
                        </Mui.Typography>
                        <Mui.Typography variant="p">{planeta.descrição}</Mui.Typography>

                        <Link style={{ textDecoration: 'none' }} to='/planetas'>
                            <Mui.Button color="secondary" variant="outlined" size='large'>Voltar</Mui.Button>
                        </Link>

                        <Mui.Button variant="contained" size='large' onClick={() => { clickCompartilhar(); }}>Compartilhar</Mui.Button>
                    </Mui.Stack>
                </Mui.Container>
            </>)
        }



    </>)
}