import { Injectable } from 'graphql-modules';
import user from '../resolvers/user';
import { PubSub } from 'graphql-subscriptions';
const users = [
  {
    id: 0,
    username: 'Sample User 0',
  },
  {
    id: 1,
    username: 'Sample User 1',
  },
  {
    id: 2,
    username: 'Sample User 2',
  },
];

export interface Post {
  id: number;
  username: string;
}

@Injectable()
export class Users {
  constructor(private pubSub: PubSub) {}
  getUser(id: number) {
    return users.find(({ id }) => id === id);
  }

  allUsers() {
    return users;
  }

  create(obj:Post) {
    let obj1=obj
    users.push(obj1);
    console.log(users)
    this.pubSub.publish('POST_ADDED', { userAdded: obj });
    console.log( this.pubSub.publish('POST_ADDED', { userAdded: obj }))
    return obj1;
  }
}
