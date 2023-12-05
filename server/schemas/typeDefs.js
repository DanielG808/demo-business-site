const typeDefs = `
type User {
    _id: ID!
    email: String!
    password: String!
    admin: Boolean
}

type Product {
    _id: ID!
    name: String!
    description: String!
}

type Auth {
    token: ID!
    user: User!
}

type Query {
    getUser(id: String!): User!
    getUsers: [User!]

    getProductById(id: String!): Product!
    getProducts: [Product!]
    getProductsByText(input: String!): [Product!]
}

type Mutation {
    addUser(email: String!, password: String!, admin: String): Auth!
    login(email: String!, password: String!): Auth!
    deleteUser(email: String!): User!

    addProduct(name: String!, description: String!): Product!
}
`;

module.exports = typeDefs;
