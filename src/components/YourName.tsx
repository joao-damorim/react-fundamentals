interface IYourName {
    setName2: any
}

function YourName(props: IYourName) {

    console.log(props)
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input 
                type="text" 
                placeholder="Qual é o seu nome?" 
                onChange={(e) => props.setName2(e.target.value)}/>
        </div>
    )
}

export default YourName