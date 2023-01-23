interface Props{
    name: string
}

function SayMyName(props: Props) {
    
    return (
        <div>
            <p>Fala aí, {props.name}.</p>
        </div>
    )

}

export default SayMyName