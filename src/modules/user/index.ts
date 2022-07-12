import { createModule, gql, Injectable } from 'graphql-modules';
import { Users } from './providers/users';
import resolvers from './resolvers';


export const UserModule = createModule({
  id: 'user',
  dirname: __dirname,
  providers: [Users],
  resolvers,
  typeDefs: gql`
    type User {
      id: Int!
      username: String!
    }

    type Query {
      users: [User]
      user(id: Int!): User
    }

    type Mutation {
      createUser(id: Int!, username: String!): User
    }

    type Subscription {
      userAdded: User
    }
  `,
});
