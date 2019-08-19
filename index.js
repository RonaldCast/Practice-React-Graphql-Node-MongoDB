import express from 'express'
import bodyParser from 'body-parser'
const { ApolloServer } = require("apollo-server-express");

import typeDefs from  './schemas'
import resolvers from  './resolvers'

const PORT = 3000

//configuracion del servidor Con apolo 
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use('/graphql', bodyParser.json())


app.listen(PORT, () => {
    console.log("http://localhost:3000");
})