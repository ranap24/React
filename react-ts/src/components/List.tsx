type props = {
    text : string
    removeTodo : (event : React.MouseEvent) => void
}

const List:React.FC<props> = (props) => {
    return (
        <li><p onClick={props.removeTodo}>{props.text}</p></li>
    )

}

export default List;