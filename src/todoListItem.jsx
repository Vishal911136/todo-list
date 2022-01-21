
let TodoListItem = (props) =>{
    return (
        <>
            <div className="items">
                <i className="uil uil-trash-alt" onClick={() =>{
                    props.onSelect(props.id)
                    }}></i>
                <strong>{props.stateText}</strong>
            </div>
        </>
    );
}

export default TodoListItem;