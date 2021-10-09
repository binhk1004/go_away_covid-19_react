import axios from "axios";
import { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState("");
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
      const requestDate = showData.data.response.body.items.item;

      const gubunData = new Array();
      const incDecData = new Array();
      const finalItem = new Object();

      for (let i = 0; i < requestDate.length; i++) {
        gubunData.push(requestDate[i].gubun);
        incDecData.push(requestDate[i].incDec);
      }
      finalItem["gubun"] = gubunData;
      finalItem["incDec"] = incDecData; 
      setData(finalItem);
      // console.log(data.gubun[0])
    });
    getResult();
  }, []);

  const gubun = data && data.gubun.map((data) => <div>{data}</div>);
  const incDec = data &&data.incDec.map((data) => <div>{data}</div>);

  return (
    <div>
      {/* {gubun}
      {incDec} */}
    </div>
  );
}

export default ApiCall;
