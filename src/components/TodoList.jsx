import {useSelector} from "react-redux";

const TodoList = () => {
    const {list, status, error} = useSelector(state => state.todos)

    const view = `Todos: ${list.length}. Status: ${status}`
    return(
        <div>
            {
                status === 'loading' ? 'Loading...' : view
            }

            {error && <h4>{error}</h4>}
        </div>
    )
}

export default TodoList