const typeDefs = `
type Product {
    _id: ID!
    name: String!
    description: String!
}

type User {
    _id: ID!
    admin: Boolean
    email: String!
    password: String!
    products: [Product!]
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
    productSearch(input: String!): [Product!]
}

type Mutation {
    addUser(email: String!, password: String!, admin: String): Auth!
    login(email: String!, password: String!): Auth!
    deleteUser(email: String!): User!

    addProduct(id: String!, name: String!, description: String!): User!
    deleteProduct(id: String!): Product!
}
`;

module.exports = typeDefs;
