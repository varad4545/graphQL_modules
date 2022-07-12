


import { Users } from '../providers/users';
import { PubSub } from 'graphql-subscriptions';
import { Injectable } from 'graphql-modules';

export default
{    
    Subscription:
    {
        userAdded:
        {
            subscribe(_root: any, _args: {}, { injector }: GraphQLModules.Context) {
                console.log("done")
                return injector.get(PubSub).asyncIterator(['POST_ADDED']);
              },
        },
    },
};
