import { InternalSymbolName } from "typescript"

interface IAnotherList {
    myItems: Array<string>
}

function AnotherList(props: IAnotherList) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {   props.myItems.length > 0 ? (
                props.myItems.map((item, index) => (
                    <p key={index}>{ item }</p>
                ))) : (
                    <p>Não há itens na lista!</p>
                )
            }
        </>
    )
}

export default AnotherList