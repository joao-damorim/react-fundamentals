interface IButton {
    text: string,
    event: any
}

function Button(props: IButton) {
    console.log(props)
    return <button onClick={props.event}>{props.text}</button>
}

export default Button