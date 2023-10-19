const TemplateExpressions = () =>{

    const name = 'Cheyenne';
    const data = {
        age: 23,
        job: 'Programmer',
    }
    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você tem quantos anos? {data.age}</p>
            <p>Você atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions;