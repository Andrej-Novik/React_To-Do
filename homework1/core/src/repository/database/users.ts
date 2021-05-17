import { v4 as uuidv4 } from "uuid";
import { User } from '../../models/dbm/users'
import { IUsersRepository } from './interfaces'
import DBConnector from './connector'

class UsersRepository implements IUsersRepository {
	getList = async () => {
		try {
			const response = await DBConnector.connector
			?.getRepository(User)
			.find()
			return { value: response }
		} catch (e) {
		return { error: e }
		}
	}
	getUser = async (id: string) => {
		try {
			const response = await DBConnector.connector
			?.getRepository(User)
			//.find(id)
			return { value: response }
		} catch (e) {
		return { error: e }
		}
	}
	editUser = async (id: string, firstName: string, lastName: string) => {
		try {
			const response = await DBConnector.connector
			?.getRepository(User)
			.update(id, { firstName, lastName })
			return { value: response }
		} catch (e) {
		return { error: e }
		}
	}

	deleteUser = async (id: string) => {
		try {
			const response = await DBConnector.connector
			?.getRepository(User)
			.delete(id)
			return { value: !!response.affected }
		} catch (e) {
			return { error: e }
		}
	}

	createUser = async (firstName: string, lastName: string) => {
		try {
			const response = await DBConnector.connector
			?.getRepository(User)
				.save({ firstName, lastName })
			return { value: response }
		} catch (e) {
		return { error: e }
		}
	}
}
export default new UsersRepository()