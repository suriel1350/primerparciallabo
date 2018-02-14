function route(app, regex, prefix) {
 app.get(regex, function (req, res) {
 var type = req.params[0];
 var path = req.params[1];
 var file = prefix + type + '/' + path
 res.sendfile(file);
 });
}

var express=require('express');
var PORT=8087;

var app=express();
app.get('/', function(req, res){
	res.sendfile('indexCliente.html');
});

app.get('/carrito', function(req, res) {
 res.sendfile('shoppingcar.html');
});

app.get('/google2399103e46b25864.html', function(req, res) {
 res.sendfile('google2399103e46b25864.html');
});

app.get('/mapa', function(req, res) {
 res.sendfile('indexCliente.html');
});

app.get('/youtube', function(req, res) {
 res.sendfile('youtube.html');
});

route(app, /^\/(assets|dist|img|jscolor-2.0.4)\/(.*)/, './');

app.listen(PORT);
console.log('Running on port ' + PORT);
