import axios from "axios";

const ApiCall = async () => {

    const url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
    const ServiceKey = 'jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D';

    const result = await axios.get(url+'?'+ServiceKey);

    console.log(result.data)
    return(
        <div>테스트 중 입니다.</div>
    )
}


export default ApiCall;