function Event() {
    function myEvent() {
        console.log('Fui ativado!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={myEvent}>Ativar!</button>
        </div>
    )
}

export default Event