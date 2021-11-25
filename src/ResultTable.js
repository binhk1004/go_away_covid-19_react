import "./ResultTable.css";

export default function ResultTable(tableDataSet) {

  if(tableDataSet !== []){
    
  }

  return (
    <table>
        <tr>
          <td>지역</td>
          <td>전일대비 증가수</td>
          <td>누적 확진자 수</td>
        </tr>
        <tr>
          <td>{tableDataSet.data[0]}</td>
          <td>{tableDataSet.data[1]}</td>
          <td>{tableDataSet.data[2]}</td>
        </tr>
    </table>
  );
}
