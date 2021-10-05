import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Test = () => {
  const [data, setData] = useState("");

  const url = "/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
  const ServiceKey =
    "jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D";

  useEffect(() => {
    const requestReuslt = async () => {
      try {
        const result = await axios.get(url + "?ServiceKey=" + ServiceKey)
        setData(result.data.response.body.items.item[1].gubun);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    requestReuslt()
  },[]);
  return <div>{data}</div>;
};

export default Test;
