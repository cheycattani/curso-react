const Challenge = () => {
    const a = 20 
    const b = 23
    const soma = () => {
        const result = a + b;
        alert(`A soma é: ${result}`);
    } 

    return(
        <div>
            <h3>A soma de {a} e {b} é: <button onClick={soma}>Clique para ver o resultado!</button></h3>
        </div>
    )
}

export default Challenge;