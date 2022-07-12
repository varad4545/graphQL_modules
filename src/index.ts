

import 'reflect-metadata'
import express from 'express'
import {graphqlHTTP} from 'express-graphql'
import { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { createApplication, Inject, Injectable } from 'graphql-modules';
import { PubSub } from 'graphql-subscriptions';
import { UserModule } from './modules/user';

const application = createApplication({
  modules: [UserModule],
  providers: [{
    provide: PubSub,
    useValue: new PubSub()
  }]
});

const execute = application.createExecution()
const subscribe = application.createSubscription()
const schema = application.schema

const server = express()

server.use(
  '/',
  graphqlHTTP({
    schema,
    customExecuteFn: execute,
    graphiql: true
  })
)

const webServer = createServer(server)

webServer.listen(4000, () => {
  console.log('🚀 Server ready at http://localhost:4000')

  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: webServer,
      path: '/'
    }
  )
})
