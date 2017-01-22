module.exports = function (app) {
    app.get('/',function(req,res){
       var connection = app.infra.DbConnectionFactory();
       var produtoDao = new app.infra.ProdutosDAO(connection); 
       produtoDao.lista(function(erros,resultados){
            res.render('Home/index',{livros:resultados});
        });
    connection.end();
    });
}



// module.exports = function(app)  {
//     app.get('/',function(req,res){
//         var.connection = app.infra.DbConnectionFactory();
//         var produtosDAO = new app.infra.ProdutosDAO(connection); 
//         produtosDAO.lista(function(erros,resultados){
//             res.render('home/index',{livros:resultados});
//         });
//         connection.end();    
//     });  
// }

