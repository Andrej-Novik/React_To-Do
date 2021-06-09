import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/actions/login";
import LoginPage from "./component";

const LoginPageContainer = () => {
  const dispatch = useDispatch();

	const error = useSelector((state) => state.loginPage.error);

	const auth = (email, password) => {
		dispatch(login(email, password));
  };

  return <LoginPage error={error} auth={auth} />;
};

export const container = LoginPageContainer;
