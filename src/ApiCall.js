import axios from "axios";

function ApiCall(){

    const url = '/openapi/service/rest/Covid19/getCovid19SidoInfStateJson';
    const ServiceKey = 'jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D';

    const result = axios.get(url+'?ServiceKey='+ServiceKey);
    
        function getResult(){
            return new Promise((resolve, reject)=>{
                if (result){
                    resolve(result)
                }
                reject("응답이 거절 되었습니다.")
            })
        };
    
        getResult().then(function(showData){
            const test = showData.data.response.body.items.item[1].gubun
            console.log(test)
        })

    return(
        <div></div>
    )
}

export default ApiCall;