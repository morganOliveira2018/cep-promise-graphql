const { RESTDataSource } = require('apollo-datasource-rest');

class CepPromise extends RESTDataSource {
    async queryAdress(cep) {
        const response = await this.get(`http://api.postmon.com.br/v1/cep/${cep}`);

        if(!cep){
            return {
                error: 'CEP inválido'
            }
        }
        
        if(!response.ok) {
            return {
                error: 'Error ao pesquisar CEP',
            };
        }

        const responseJson = await response.json();
        console.log({responseJson});

        // return {
        //     cep: responseJson.cep,
        //     bairro: responseJson.bairro,
        //     cidade: responseJson.localidade,
        //     endereco: responseJson.logradouro,
        //     uf: responseJson.estado,
        // }
    }
}

module.exports = CepPromise;