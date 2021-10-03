import { useState } from "react";
import axios from "axios";

const Test = () => {

    const [reqData, resDate] = useState('');

    const url = "/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
    const ServiceKey ="jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D";

    axios.get(url + "?ServiceKey=" + ServiceKey).then(Response => {reqData(Response.data)})

    return(
        <div>{}</div>
    )
}

export default Test;