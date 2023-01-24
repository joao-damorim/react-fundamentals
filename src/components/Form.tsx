import { useState } from 'react'

function Form() {
    function createUser(e: any){
        e.preventDefault();
        console.log(name)
        console.log('Cadastrou usuário!')
    }

    const [name, setName] = useState('')

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="text" 
                    id="password" 
                    placeholder="Digite a sua senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form