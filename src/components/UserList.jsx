import {useSelector} from "react-redux";

const UserList = () => {
    const {users} = useSelector(state => state)

    return(
        <div>
            Users: {users.length}
        </div>
    )
}

export default UserList