import Item from './Item';

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item brand='Ferrari'/>
                <Item brand='Fiat'/>
            </ul>
        </>
    )
}

export default List