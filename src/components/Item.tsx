interface IItem {
    brand: string
}

function Item(props: IItem) {
    return (
        <>
            <li>{props.brand}</li>
        </>
    )
}

export default Item