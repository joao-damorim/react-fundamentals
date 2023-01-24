import Button from "./Buttom"

function Event() {
    function myEvent() {
        console.log('Ativando primeiro evento!')
    }
    function secondEvent(e: any) {
        console.log(e)
    }

    const secondEventObj  = {
        text1: 'Ativando',
        text2: 'Segundo'
    }
  
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={myEvent} text="Primeiro Evento" />
            <Button event={() => secondEvent(secondEventObj)} text="Segundo Evento" />
            <button onClick={myEvent}>Ativar!</button>
        </div>
    )
}

export default Event