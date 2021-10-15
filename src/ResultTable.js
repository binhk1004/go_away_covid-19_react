import "./ResultTable.css";

export default function ResultTable(testData) {

    const gubunData = testData.apiresult.apiresult.gubun; //행정구역 구분
    const incDecData = testData.apiresult.apiresult.incDec; //전일대비 증감수
    const totalData = testData.apiresult.apiresult.total; //확진자 수

    if (gubunData !== "undefined" && gubunData !== null){}

  return (
    <table>
      <thead>
        <tr>
          <td>지역</td>
          <td>전일대비 증가수</td>
          <td>누적 확진자 수</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{gubunData[4]}</td>
          <td>{incDecData[4]}</td>
          <td>{totalData[4]}</td>
        </tr>
      </tbody>
    </table>
  );
}
