interface ISalutation {
    name2: any
}

function Salutation(props: ISalutation) {

    function generateSalutation(name: string) {
        return `Olá, ${name}.`
    }

    return <>{props.name2 && <p>{generateSalutation(props.name2)}</p>}</>
}

export default Salutation