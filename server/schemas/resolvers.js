const { User, Product } = require("../models");
const { signToken, AuthenticationError } = require("../utils");

const resolvers = {
  Query: {
    // User Queries
    getUser: async (parent, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.log(error);
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    // User mutations
    addUser: async (parent, { email, password, admin }) => {
      const user = await User.create({ email, password, admin });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        console.log("User not found.");
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        console.log("Incorrect or missing password.");
        throw AuthenticationError;
      }

      const token = signToken(user);
      console.log(`${user.email} is now logged in.`);
      return { token, user };
    },
    deleteUser: async (parent, { email }) => {
      const deletedUser = await User.findOneAndDelete(email);

      console.log(`User, ${deletedUser.email}, has been deleted.`);
      return deletedUser;
    },
    // Product mutations
    addProduct: async (parent, { name, description }) => {
      const product = await new Product.create({ name, description });

      console.log(`New product, ${name}, added!`);
      return product;
    },
  },
};

module.exports = resolvers;
