import { connect } from "react-redux"
import UsersPage from "."
import { addUser } from "../../redux/reducers/usersPage"
import React from "react"
import { getUsers } from "../../redux/selectors/users"

class UsersPageContainer extends React.Component{
	render() {
		return(
			<UsersPage {...this.props} users={ this.props.users }/>
		)	
	}
}

const mapStateToProps = (state) => ({
	users: getUsers(state)
})
export default	connect(mapStateToProps, {addUser})(UsersPageContainer)
