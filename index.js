import express from 'express'
import bodyParser from 'body-parser'

import models from './models'

//para que funciones Graphql
const { ApolloServer } = require("apollo-server-express");


//integrando mongoose
import mongoose from 'mongoose'
mongoose.Promise = global.Promise;



import typeDefs from  './schemas'
import resolvers from  './resolvers'

const PORT = 2000

//configuracion del servidor Con apolo 
const server = new ApolloServer({ typeDefs, resolvers, context:{
  models
}});

const app = express();
server.applyMiddleware({ app });

app.use('/graphql', bodyParser.json())



mongoose
  .connect("mongodb://localhost:27017/instagram-clone", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Conectado a Mongo!!");
    
   app.listen(PORT, () => {
     console.log("http://localhost:2000");
   });
  });

