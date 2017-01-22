var http = require('http');

var config = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application\json',
        'content-type': 'application/json'
    }
};


var client = http.request(config,function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log('corpo'+body);
    });
});

var produto = {
    titulo: 'Teste de cadastro',
    descricao: 'Livro escribal',
    preco: 100000
};

client.end(JSON.stringify(produto));