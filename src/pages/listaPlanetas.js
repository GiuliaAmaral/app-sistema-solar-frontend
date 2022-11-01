import * as Mui from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiPlanetas from "../services/planetas";

export default function ListaPlanetas() {

    const [carregando, setCarregando] = useState(true);
    const [planetas, setPlanetas] = useState([])



    useEffect(() => {
        (async () => {
            const respostaApi = await ApiPlanetas.obterTodos()
            setCarregando(false)
            setPlanetas(respostaApi)

        })()
    }, [])



    return (<>

        {
            (carregando) ? (<>
                <Mui.Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
                    <Mui.CircularProgress sx={{ color: '#fff' }} size={100} />
                </Mui.Box>
            </>) : (<>

                <Mui.Container maxWidth="xl">
                    <Mui.Grid container spacing={2} mt={2}>

                        {
                            planetas.map((planetas) => {
                                return (
                                    <>
                                        <Mui.Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                                            <Mui.Card sx={{ background: "linear-gradient(-30deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.06) 60%)", color: '#fff', }} key={planetas._id}>
                                                <Link to={`/detalhes/${planetas.slug}`} style={{textDecoration:'none', color:'white'}}>
                                                    <Mui.CardActionArea >
                                                        <Mui.CardContent>
                                                            <img Width='100%' src={planetas.imgUrl} alt={planetas.nome} />
                                                            <Mui.Typography gutterBottom variant="h5" component="div">
                                                                {planetas.nome}
                                                            </Mui.Typography>
                                                        </Mui.CardContent>
                                                    </Mui.CardActionArea>
                                                </Link>
                                            </Mui.Card>
                                        </Mui.Grid>
                                    </>
                                )
                            })
                        }
                    </Mui.Grid>
                </Mui.Container>
            </>)
        }




    </>)
}