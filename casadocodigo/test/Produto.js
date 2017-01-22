var express = require('../config/express')();
var request = require('supertest')(express);
describe('#ProdutosController', function(){
    it('#listagem json', function(done){

        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200,done);
    });

//   it('#cadastro de novo livro com dados invalidos',function(done){
//     request.post('/produtos')
//     .send({titulo:"",descricao:"",preco:})
//     .expect(400,done);
//    });
   
it('#cadastro de novo livro com dados validos', function(done){
    request.post('/produtos')
    .send({titulo:"Macacos me mordam",descricao:"FERRRRR",preco:100.80})
    .expect(302,done);
    });
 });





// var http = require('http');
// var assert = require('assert');
// describe('ProdutosController', function(){
//     it('listagem de livors', function(done){
//         var config = {
//             hostname: 'localhost',
//             port:3000,
//             path:'/produtos',
//             headers:{
//                 'Accept':'application/json'
//             }
//         };

// http.get(config,function(res){
//     assert.equal(res.statusCode,200);
//     assert.equal(res.headers['Content-Type'], 'application/json; charset=utf-8');
//     done();
//    });
//   });
// });