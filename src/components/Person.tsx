interface IPerson {
    name: string
    age: number
}

function Person(props: IPerson) {
    return (
        <div>
            <h2>Nome: {props.name}</h2>
            <h2>Idade: {props.age}</h2>
        </div>
    )
}

export default Person