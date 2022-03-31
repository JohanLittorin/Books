const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    release: String!
  }
  type Query {
    books: [Book!]!
    book(id: ID!): Book!
  }
  input CreateBookInput {
    id: ID!
    title: String!
    author: String!
    release: String!
  }
  input UpdateBookInput {
    id: ID!
    newTitle: String!
  }
  type Mutation {
    createBook(input: CreateBookInput!): Book
    updateBook(input: UpdateBookInput!): Book
    deleteBook(id: ID!): Book
  }
`;
module.exports = { typeDefs };
