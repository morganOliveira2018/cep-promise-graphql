const { RESTDataSource } = require('apollo-datasource-rest');

class CepPromise extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://api.postmon.com.br/v1/cep/';
    }

    async queryAdress(cep) {
        const response = await this.get(`${cep}`);
        return {
            bairro: response.bairro,
            cidade: response.cidade,
            endereco: response.logradouro,
            uf: response.estado,
        };       
    }
}

module.exports = CepPromise;