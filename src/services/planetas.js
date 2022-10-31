export default class ApiPlanetas {


    static async obterUnico(condicoes) {
        let body = { condicoes };

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(body),
            redirect: 'follow'
        };

        try {

            let respostaApi = await fetch(`${process.env.REACT_APP_API_BASE_URL}/planetas/obter`, requestOptions);
            let respostaJson = await respostaApi.json();


            if (respostaApi.ok) {
                return respostaJson.resposta;

            } else {
                console.error(respostaApi);
                throw new Error(respostaApi.statusMotivo)
            }

        } catch (error) {
            console.error(error);
            throw new Error(error)
        }
    }


    static async obterTodos() {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {

            let respostaApi = await fetch(`${process.env.REACT_APP_API_BASE_URL}/planetas/obter`, requestOptions);
            let respostaJson = await respostaApi.json();

            if (respostaApi.ok) {
                return respostaJson.resposta;

            } else {
                console.error(respostaApi);
                throw new Error(respostaApi.statusMotivo)
            }


        } catch (error) {
            console.error(error);
            throw new Error(error)
        }

    }


}