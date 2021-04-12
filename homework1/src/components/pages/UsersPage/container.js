import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/actions/users";
import UsersPage from "./component";

export const UsersPageContainer = () => {
  const dispatch = useDispatch();
  const onOpen = () => {
    dispatch(openModal());
  };
  return <UsersPage onOpen={onOpen} />;
};

export const container = UsersPageContainer;
