import  UsersRepository from "../../repository/database/users"
class UsersService {
	
	//getList = async () => {
  //  const res = {
	//		value: [
  //      { id: 1, firstName: "Ivan", lastName: "Nefedov" },
  //      { id: 2, firstName: "Nikita", lastName: "Zalubov" },
  //      { id: 3, firstName: "Andrew", lastName: "Taranow" },
  //      { id: 4, firstName: "Mihail", lastName: "Ptuskin" },
  //      { id: 5, firstName: "Artem", lastName: "Haliman" },
  //    ],
	//		//UsersRepository.getList(),
  //    error: undefined,
  //  };
  //  if (res.error) return { error: res.error };
  //  return { value: res.value };
	//};
	getList = async () => {
		const { value, error } = await UsersRepository.getList();
    if (error) return { error: error };
    return { value: value };
  };
  deleteUser = async (id: string) => {
    const { value, error } = await UsersRepository.deleteUser(id);
    if (error) return { error: error };
    return { value: value };
  };
	createUser = async (firstName: string, lastName: string) => {
    const { value, error } = await UsersRepository.createUser(firstName, lastName);
    if (error) return { error: error };
    return { value: value };
  };
	editUser = async (id: string, firstName: string, lastName: string) => {
		const { value, error } = await UsersRepository.editUser(id, firstName, lastName);
    if (error) return { error: error };
    return { value: value };
  };
	getUser = async (id: string) => {
    const { value, error } = await UsersRepository.getUser(id);
    if (error) return { error: error };
    return { value: value };
  };
}
export default new UsersService();
