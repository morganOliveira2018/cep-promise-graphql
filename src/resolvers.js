module.exports = {
    Query: {
        endereco: (_, { cep }, { dataSources }) => dataSources.CepPromise.queryAdress(cep),
    }
}