import axios from "axios";
import { useEffect, useState } from "react";

function ApiCall() {
  const [data, setDate] = useState({
    gubun : "",
    incDec : ""
  });
  const url = "/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
  const ServiceKey =
    "jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D";

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
      const requestDate = showData.data.response.body.items.item
      const testItems = new Array();
      const testItems2 =  new Array();

      for (let i = 0; i < requestDate.length; i++){
          testItems.push(requestDate[i].gubun)
          testItems2.push(requestDate[i].incDec)
        }
        // console.log(testItems)
        // console.log(testItems2)
        setDate(testItems, testItems2)
        console.log(data.incDec)
    });
    getResult()
  },[]);

  // const pleaseData = data.gubun.map((data) => (<li>{data}</li>))
  return (
    
    <div>
      {/* {pleaseData} */}
    </div> 
  )
}

export default ApiCall;
