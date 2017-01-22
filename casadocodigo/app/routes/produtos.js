module.exports = function(app){
    app.get('/produtos',function(req,res,next){
        var connection = app.infra.DbConnectionFactory();
        var produtoDao = new app.infra.ProdutosDAO(connection); 
        produtoDao.lista(function(erros,resultados){
            console.log(erros);
            if(erros){
                return next(erros);
            }
            res.format({
                html: function(){
                    res.render('produtos/lista',{lista:resultados});
                },
                json: function(){
                    res.json(resultados);
                }
            });
        });
        connection.end();
    });


     app.get('/produtos/form',function(req,res){
      res.render('produtos/form',
            {errosValidacao:{},produto:{}});
      });

      app.post('/produtos',function(req,res){
        var produto = req.body;

        req.assert('titulo', 'titulo e obrigatorio').notEmpty();
        req.assert('preco','Formato invalido').isFloat();

      var erros = req.validationErrors();
      if(erros){
      res.render('produtos/form',{errosValidacao:erros,produto:produto});
      return;
}


       console.log(produto);

        var connection = app.infra.DbConnectionFactory();
        var produtoDao = new app.infra.ProdutosDAO(connection);
        produtoDao.salva(produto,function(erros,resultado){
               console.log(erros);
        res.redirect('/produtos')
      });
    });
}

    












// module.exports = function(app){
//     app.get('/produtos',function(req,res,next){
//         var connection = app.infra.DbConnectionFactory();
//         var produtoDao = new app.infra.ProdutosDAO(connection); 
//         produtoDao.lista(function(erros,resultados){
//             console.log(erros);
//             if(erros){
//                 return next(erros);
//             }
//             res.format({
//                 html: function(){
//                     res.render('produtos/lista',{lista:resultados});
//                 },
//                 json: function(){
//                     res.json(resultados);
//                 }
//             });
//         });
//         connection.end();
//     });


//      app.get('/produtos/form',function(req,res){
//       res.render('produtos/form',
//             {errosValidacao:{},produto:{}});
//       });

//       app.post('/produtos',function(req,res){
//         var produto = req.body;

//         req.assert('titulo', 'titulo e obrigatorio').notEmpty();
//         req.assert('preco','Formato invalido').isFloat();

//       var erros = req.validationErrors();
//       if(erros){
//       res.render('produtos/form',{errosValidacao:erros,produto:produto});
//       return;
// }


//        console.log(produto);

//         var connection = app.infra.DbConnectionFactory();
//         var produtoDao = new app.infra.ProdutosDAO(connection);
//         produtoDao.salva(produto,function(erros,resultado){
//                console.log(erros);
//         res.redirect('/produtos')
//       });
//     });
// }

    







