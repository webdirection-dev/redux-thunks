export const ADD_USERS = 'ADD_USERS'

const addUser = (user) => ({
    type: ADD_USERS,
    payload: user
})

// 1й параметр dispatch приходит из библиотеки redux-thunk
// 2й параметр getState, сейчас его не вызываем
// 3й параметр client и PATH приходят сюда из thunk.withExtraArgument({client, PATH})
export const loadUsers = () => (dispatch, _, {client, PATH}) => {
    client.get(`${PATH}users`)
        .then(data => dispatch(addUser(data)))
        .catch(e => console.error(e))
}