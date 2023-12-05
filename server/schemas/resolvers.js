const { User, Product } = require("../models");
const { signToken, AuthenticationError } = require("../utils");

const resolvers = {
  Query: {
    // User Queries
    getUser: async (parent, { id }) => {
      try {
        const user = await User.findById(id);

        if (!user) {
          console.log(`Product with ID ${id} not found.`);
          return null;
        }

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
    // Product Queries
    getProductById: async (parent, { id }) => {
      try {
        const product = await Product.findById(id);

        if (!product) {
          console.log(`Product with ID ${id} not found.`);
          return null;
        }

        return product;
      } catch (error) {
        console.log(error);
      }
    },
    getProducts: async () => {
      try {
        const products = await Product.find();
        return products;
      } catch (error) {
        console.log(error);
      }
    },
    productSearch: async (parent, { input }) => {
      try {
        const products = await Product.find({ $text: { $search: input } });

        if (!products) {
          console.log(`There are no products with the search term ${input}`);
          return null;
        }

        return products;
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
      const product = await Product.create({ name, description });

      console.log(`New product, ${name}, added!`);
      return product;
    },
    // BROKEN UPDATE FUNCTION; RETURNS PRODUCT BUT DOESNT UPDATE
    // updateProductName: async (parent, { id, newName }) => {
    //   const product = await Product.findByIdAndUpdate(
    //     id,
    //     { name: newName },
    //     { new: true }
    //   );

    //   return product;
    // },
    deleteProduct: async (parent, { id }) => {
      const product = await Product.findByIdAndDelete(id);

      console.log(`${product.name} has been deleted.`);
      return product;
    },
  },
};

module.exports = resolvers;
