import "./assets/styles/main.css"
import { List } from "./components/list"
import { Item } from "./components/Item"
import { useRef, useState } from "react"
const App = () => {

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))|| []);
    const InputValue = useRef()

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setTodos([...todos,{
                id:todos.at(-1)?.id + 1 || 1,
                isComplated: false,
                text: InputValue.current.value,

            },])
        InputValue.current.value = ""
    }
    localStorage.setItem("todos",JSON.stringify(todos))

    return (
        <div className="container">
            <h1 className="display-2 fw-bold text-center my-3">TODO APP</h1>
            <form onSubmit={handleSubmit} className="w-50 mx-auto p-5 shadow">
                <div className="input-group">
                    <input ref={InputValue} type="text" placeholder="Todo kiriting" className="form-control"></input>
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
            {
                todos.length ? (
                    <List>
                {
                    todos.map((todo) => (
                        <Item
                        key={todo.id}
                        todos={todos}
                            text={todo.text}
                            id={todo.id}
                            isComplate={todo.isComplated}
                            setTodos={setTodos} />
                    ))
                }
            </List>
                ) :(
                    <h2 className="text-center h2 mt-5 text-danger">Sizda hech qanday Todo mavjud emas</h2>
                )
            }

        </div>
    )
}
export default App 
