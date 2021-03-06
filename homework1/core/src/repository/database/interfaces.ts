export interface IConnector {
  createConnection: () => void
}

export default interface IDB {
  connector: IConnector
  users: IUsersRepository
}

export interface IUsersRepository {
  //getList: () => Promise<IFuncResultModel<User[]>>
  //getById: (id: string) => Promise<IFuncResultModel<Employee>>
  //create: (data: INewEmployeeDTM) => Promise<IFuncResultModel<Employee>>
  //update: (
  //  id: string,
  //  data: INewEmployeeDTM
  //) => Promise<IFuncResultModel<Employee>>
  //delete: (id: string) => Promise<IFuncResultModel<boolean>>
}