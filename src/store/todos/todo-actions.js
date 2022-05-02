export const ADD_TODOS = '@@todos/ADD_TODOS'
export const SET_LOADING = '@@todos/SET_LOADING'
export const SET_ERROR = '@@todos/SET_ERROR'
export const ADD_TODO = '@@todos/ADD_TODO'

const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
})

const setLoading = () => ({
    type: SET_LOADING
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

// 1й параметр dispatch приходит из библиотеки redux-thunk
// 2й параметр getState, сейчас его не вызываем
// 3й параметр client и PATH приходят сюда из thunk.withExtraArgument({client, PATH})
export const loadTodos = () => (dispatch, _, {client, PATH}) => {
    dispatch(setLoading())

    client.get(`${PATH}todos`)
        .then(data => dispatch(addTodos(data)))
        .catch(err => {
            dispatch(setError(err))
        })
}

export const createTodo = (title) => (dispatch, _, {client, PATH}) => {
    dispatch(setLoading())
    const body = {
        'userId': 1,
        'title': title,
        'completed': false,
    }

    client.post(`${PATH}todos`, body)
        .then(newTodo => dispatch(addTodo(newTodo)))
        .catch(err => {
            dispatch(setError(err))
        })
}