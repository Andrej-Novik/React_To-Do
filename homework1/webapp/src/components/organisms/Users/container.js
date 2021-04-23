import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, getUsersList } from "../../../redux/actions/users";
import Users from "./component";

export const UsersContainer = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.usersPage.users);
	const userLoader = useSelector((state) => state.usersPage.userLoader);
	const isError = useSelector((state) => state.usersPage.isError);

	const onEdit = (id) => {
		const clickedUser = users.find((user) => user.id === id);
		dispatch(
			setCurrentUser(
				clickedUser.id,
				clickedUser.firstName,
				clickedUser.lastName
			)
		);
	};
	const getUsers = () => {
		dispatch(getUsersList())
	}
	
	return <Users users={users} onEdit={onEdit} userLoader={userLoader} isError={isError} getUsers={getUsers}/>;
};

export const container = UsersContainer;
