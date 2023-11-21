const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils");

const resolvers = {
  Query: {
    getUser: async (parent, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password });
      const token = signToken(user);

      return { token, user };
    },
    deleteUser: async (parent, { email }) => {
      const deletedUser = await User.findOneAndDelete(email);

      console.log(`User, ${deletedUser.email}, has been deleted.`);
      return deletedUser;
    },
  },
};

module.exports = resolvers;
