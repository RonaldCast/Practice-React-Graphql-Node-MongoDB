// resolvers son las funciones que se mandan
// los datos 

export default {
  Query: {
    allUsers: (parent, args, {models}) => models.User.find(),
    getUser: (parent, args, {models}) => models.User.findOne(args)
  },
  Mutation: {
    createUser: (parent,args, {models} ) => (
        
        models.User.create(args)
    
    )
  }
};