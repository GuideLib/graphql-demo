const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(username: String!): User
    organizations: [Organization!]!
    organization(name: String!): Organization
  }
#   type Mutation {
#     updateUser(username: String!, user: User): User
#     updateOrganization(name: String!, organization: Organization): Organization
#     addUser(user: User): User
#     addOrganization(organization: Organization): Organization
#     deleteUser(username: String!): User
#     deleteOrganization(name: String!): Organization
#   }
  type User {
    username: String!
    firstName: String
    lastName: String
    organizations: [Organization!]!
  }
  type Organization {
    name: String!
    staff: [User!]!
  }
`;

module.exports = typeDefs;