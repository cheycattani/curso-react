import {useState} from 'react';

const ManageData = () => {

    let someDate = 10;

    const [number, setNumber] = useState();

    return(
        <div>
            <p>Valor: {someDate} </p>
            <button onClick={() => (someDate = 15)}>Mudar variável</button>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(20)}>Mudar o state</button>
            </div>
        </div>
    )
}

export default ManageData;