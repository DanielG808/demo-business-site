const typeDefs = `
type User {
    _id: ID!
    email: String!
    password: String!
    admin: Boolean
}

type Auth {
    token: ID!
    user: User!
}

type Query {
    getUser(id: String!): User!
    getUsers: [User!]
}

type Mutation {
    addUser(email: String!, password: String!, admin: String): Auth!
    login(email: String!, password: String!): Auth!
    deleteUser(email: String!): User!
}
`;

module.exports = typeDefs;
