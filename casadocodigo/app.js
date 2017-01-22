var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

var porta = process.env.PORT || 3000;
http.listen(porta,function(){
    console.log("servirdor rodando heroku");
});



// http.listen(3000,function(){
//     console.log("servirdor rodando");
// });



// var app = require('./config/express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.set('io',io);

// http.listen(3000,function(){
//     console.log("servirdor rodando");
// });