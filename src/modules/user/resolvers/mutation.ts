import { Users } from '../providers/users';

export default {
  Mutation: {
    // users: (_root: any, _args: {}, { injector }: GraphQLModules.Context) =>
    //   injector.get(Users).allUsers(),
    // user: (_root: any, { id }: any, { injector }: GraphQLModules.Context) =>
    //   injector.get(Users).getUser(id),
      
    createUser: (_root: any, args: any, { injector }: GraphQLModules.Context) =>{
     console.log(typeof(args))
      return injector.get(Users).create(args)}
    
    
  },
};
