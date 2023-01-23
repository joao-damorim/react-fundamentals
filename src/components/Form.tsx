function Form() {
    function createUser(e: any){
        e.preventDefault();
        console.log('Cadastrou usuário!')
    }
    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={createUser}>
                <div>
                    <input type="text"placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form