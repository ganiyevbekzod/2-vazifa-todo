export const Item=({text,id,isComplate,setTodos,todos})=>{

    const DeleteTodo=(TodoId)=>{
        const filtredTodo=todos.filter((todo)=>todo.id !==TodoId)
        setTodos([...filtredTodo]);
    }
    const EditTodo=(TodoId,text)=>{
        const NewPromp=prompt("Todoni yangilang",text);
        const findedTodo=todos.find((todo)=>todo.id === TodoId)
        findedTodo.text=NewPromp;
        setTodos([...todos]);
    }
    const handleChange=(TodoId)=>{
    const findedTodo=todos.find((todo)=> todo.id === TodoId);
        findedTodo.isComplate=!findedTodo.isComplate;
        setTodos([...todos])
        console.log(todos);
    }

    return(
        <li className="list-group-item d-flex align-items-center">
        <span>{id}.</span>
        <input onChange={()=>handleChange(id)} checked={isComplate} className="form-check-input mx-3" type="checkbox"></input>
        <strong className={isComplate ? "text-decoration-line-through text-success": ""}>{text}</strong>
        <button onClick={()=>EditTodo(id)} className="btn btn-warning ms-auto mx-3 ">EDIT</button>
        <button onClick={()=> DeleteTodo(id)} className="btn btn-danger">delete</button>
        </li>
    )
}