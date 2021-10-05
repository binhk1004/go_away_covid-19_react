import axios from "axios";
import { useEffect, useState } from "react";

function ApiCall() {
  const [data, setDate] = useState("");
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
      setDate(showData.data.response.body.items.item[1].gubun);
      console.log(data);
    });
    getResult()
  },[]);

  return <div>{data}</div>;
}

export default ApiCall;
