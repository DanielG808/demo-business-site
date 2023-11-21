const typeDefs = `
type User {
    _id: ID!
    email: String!
    password: String!
}

type Auth {
    token: ID!
    user: User!
}

type Query {
    getUser(id: String!): User!
}

type Mutation {
    addUser(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
