module.exports = function(app) {
    app.get("/promocoes/form",function(req,res){
        var connection = app.infra.DbConnectionFactory();
       var produtoDao = new app.infra.ProdutosDAO(connection); 
        produtoDao.lista(function(erros,resultados){
            res.render('promocoes/form',{lista:resultados});
        });
        connection.end();
    });

app.post("/promocoes",function(req,res){
    var promocao = req.body;
    app.get('io').emit('novaPromocao',promocao);
    res.redirect('promocoes/form');
});

// app.post("/promocoes",function(req,res){
//     var promocao = req.body;
//     //console.log(promocao);
//     app.get('io').emit('novaPromocao',promocao);
//     res.redirect('promocoes/form');
// });

}
