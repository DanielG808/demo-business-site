const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { authMiddleware } = require("./utils/auth");
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path));
  }
};

startApolloServer();
