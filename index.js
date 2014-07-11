var Hapi = require('hapi');
var fs = require('fs');
var path =require('path');
var Image = require('./img');
var handlebars = require('handlebars');
var port = process.env.PORT || 8000;

var server = new Hapi.Server(port,{
    views: {
        engines: { html: handlebars },
        path: './views'
    },
    state: {
        cookies: {
            failAction: 'ignore'
        }
    }
});


//加载静态资源
server.route([
    { method: 'GET', path: '/favicon.ico', handler: { file: __dirname +'/public/favicon.ico'} },
    { method: 'GET', path: '/public/{file*}', handler: function(request,reply){

            var filePath = './public/' + request.params.file;
            fs.exists(filePath, function (exist){
                if (exist) {
                    reply.file(filePath);
                } else {
                    reply("404 not found!").code(404);
                }
            });
        }
    }
]);


server.route({
    method: 'GET',
    path: '/img',
    handler: function (request, reply){
        var canvas = new Image(request.query).gen();
        reply(canvas.toBuffer()).type('image/png');
    }
});

server.route({
    method : 'GET',
    path : '/{p*}',
    handler: function (request, reply){
        reply.view('index',{page:[1,2]});
    }
});

server.start(function(){
    console.log("work @" +server.info.uri);
});
