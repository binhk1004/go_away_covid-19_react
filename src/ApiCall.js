import axios from "axios";
import Map from "./Map"
import { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState('');
  const url = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
  const ServiceKey = "jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D";

  const result = axios.get(url + "?ServiceKey=" + ServiceKey);

  useEffect(() => {
    function getResult() {
      return new Promise((resolve, reject) => {
        if (result) {
          resolve(result);
        }
        reject("응답이 거절 되었습니다.");
      });
    }

    
     getResult().then(function (showData) {

      console.log(showData)

      const requestDate = showData.data.response.body.items.item;
      
      const gubunData = [];
      const incDecData = [];
      const totalData = []
      const finalData = {};

      for (let i = 0; i < requestDate.length; i++) {
        gubunData.push(requestDate[i].gubun);
        incDecData.push(requestDate[i].incDec);
        totalData.push(requestDate[i].defCnt)
      }
      finalData["gubun"] = gubunData;
      finalData["incDec"] = incDecData; 
      finalData["total"] = totalData;
      setData(finalData);
    })
      getResult();
  },[]);

  const covid = data;

  return (
    <div>
       <Map apiresult={covid}/> 
    </div>
  );
}

export default ApiCall;
