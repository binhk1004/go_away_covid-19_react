import axios from "axios";

function ApiCall(){

    const url = '/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
    const ServiceKey = 'jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D';
    const startCreateDt = '20200410';
    const endCreateDt = '20210928';

    const result = axios.get(url+'?'+ServiceKey+'&'+startCreateDt+'&'+endCreateDt);

    setTimeout(console.log(result), 5000)
    return(
        <div>테스트 중 입니다.</div>
    )
}


export default ApiCall;