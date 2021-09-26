import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const App = () => {
  const URL = '/openapi/service/rest/Covid19/getCovid19SidoInfStateJson'
  const apikey = 'jFJq%2B%2BJgU2Mc8PrE5BxRZetsGiBrM%2BXDSku%2FUFCuzZ7j8FrslWnJ%2BR2xa7QbRStVG9HfSDU%2BmBQz3SCSfZmfXw%3D%3D'

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await axios.get(URL+'?ServiceKey='+apikey)
        console.log(response.data)
      }
      catch (e) {
        console.log(e)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      Hello
    </div>
  )

}

export default App;
