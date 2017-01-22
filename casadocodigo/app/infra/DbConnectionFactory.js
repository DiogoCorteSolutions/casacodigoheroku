var mysql = require('mysql');

var connectMYSQL = function(){
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'admin',
                database:'casadocodigo_nodejs'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'admin',
                database:'casadocodigo_nodejs_test'
        });
    }
    if(process.env.NODE_ENV == 'production') {
        //var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
       //var grupos = urlDeConexao.match(/ mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
    //    host:grupos[3],
        return mysql.createConnection({
                host:'us-cdbr-iron-east-04.cleardb.net',
                user:'b8db943bd3aaed',
                password:'9fe8e2dc',
                database:'heroku_bfaec5a407a8507'
        });
    }
};


module.exports = function(){
return connectMYSQL;
}

