import test from './ApiCall'

const ResultSet = () => {
    return(
        <div>
            {test.map((test)=><div>{test}</div>)}
        </div>
    )
}

export default ResultSet;