import { useState } from 'react'

function Conditional() {

    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function sendEmail(e: any){
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail(e: any){
        e.preventDefault()
        setUserEmail('')
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu e-mail" 
                onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={sendEmail}>Enviar e-mail</button>
            </form>
            { userEmail && (
                <div>
                    <p>O e-mail do usuário é: { userEmail }</p>
                    <button onClick={clearEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Conditional