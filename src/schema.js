const { gql } = require('apollo-server');

const typeDefs = gql`
  type Endereco {
    cep: String
    logradouro: String
    bairro: String
    localidade: String
    uf: String
    estado: String
    cidade_info: String
    estado_info: String
  }
  type Query {
    endereco(cep: String!): Endereco
  }
`;

module.exports = typeDefs;