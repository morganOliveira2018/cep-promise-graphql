const { gql } = require('apollo-server');

const typeDefs = gql`
  type Endereco {
    endereco: String
    bairro: String
    cidade: String
    uf: String
  }
  type Query {
    endereco(cep: String!): Endereco
  }
`;

module.exports = typeDefs;