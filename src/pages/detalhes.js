import * as Mui from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ApiPlanetas from "../services/planetas";

export default function Detalhes() {

    const { slug } = useParams();

    const [carregando, setCarregando] = useState(true);
    const [planeta, setPlaneta] = useState([]);


    useEffect(() => {
        (async () => {

            try {
                const respostaApi = await ApiPlanetas.obterUnico({ slug })
                setCarregando(false)
                setPlaneta(respostaApi[0])

            } catch (error) {
                console.error(error);
                throw new Error(error)
            }


        })()
    }, [])


    return (<>

        {
            (carregando) ? (<>
                <Mui.Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
                    <Mui.CircularProgress sx={{ color: '#fff' }} size={100} />
                </Mui.Box>
            </>) : (<>

                <Mui.Container >
                    <Mui.Grid container spacing={2} mt={2} justifyContent='center' >
                        <Mui.Grid item >
                            <Mui.Card  sx={{ background: 'transparent' ,color: '#fff', boxShadow:'none' }}>
                                <Mui.CardActionArea >
                                    <Mui.CardContent>
                                        <img Width='100%' src={planeta.imgUrl} alt={planeta.nome} />
                                        <Mui.Typography gutterBottom variant="h5" component="div">
                                            {planeta.nome}
                                        </Mui.Typography>
                                    </Mui.CardContent>
                                </Mui.CardActionArea>
                            </Mui.Card>
                        </Mui.Grid>
                    </Mui.Grid>
                </Mui.Container>
            </>)
        }



    </>)
}