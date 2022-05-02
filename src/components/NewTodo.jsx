import {useDispatch} from "react-redux";
import {createTodo} from "../store/todos/todo-actions";

const NewTodo = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        const txt = event.target.title.value

        if (txt.length) dispatch(createTodo(txt))

        event.target.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='new todo'/>
            <input type="submit" value='Add Todo'/>
        </form>
    )
}

export default NewTodo