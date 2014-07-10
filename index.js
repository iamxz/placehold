var Hapi = require('hapi');
var fs = require('fs');
var path =require('path');
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


        var info = request.query;
        var cw = parseInt(info.w,10) || info.width*1 || 200;
        var ch = info.h*1 || info.height*1 || 200;
        var ct = info.text || cw +'X'+ ch;
        var fcolor = info.fcolor || '#000';
        var bgcolor = info.bgcolor || info.backgroundColor || '#09f';
        var bdc = info.borderColor || info.bdColor || "#ccc";
        var canvas = new Canvas(cw,ch);
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = bgcolor;
        ctx.fillRect(0,0,cw,ch);
//        ctx.strokeStyle="blue";
//        ctx.moveTo(cw/2,0);
//        ctx.lineTo(cw/2,ch);
//        ctx.stroke();

        ctx.font = "24pt '雅黑'";
        ctx.fillStyle = fcolor;
       // ctx.textAlign="start";
       // ctx.fillText("start",cw/2,10);
       // ctx.textAlign="end";
       // ctx.fillText("end",cw/2,40);
       // ctx.textAlign="left";
       // ctx.fillText("left",cw/2,80);
       // ctx.textAlign="center";
       // ctx.fillText("center",cw/2,120);
       // ctx.textAlign="right";
       // ctx.fillText("right",cw/2,140);

        ctx.textAlign= "center";
        ctx.fillText(ct,cw/2,ch/2);
        ctx.font = "35pt '雅黑'";
        // ctx.strokeStyle = fcolor;
        // ctx.strokeText(ct,cw/2,ch/2);


        // 绘制圆形
//
//        ctx.fillStyle="yellow";
//        ctx.beginPath();
//        ctx.arc(cw/2,ch/2,cw/2,0,Math.PI*2,true); //Math.PI*2是JS计算方法，是圆
//        ctx.closePath();
//        ctx.fill();
//        ctx.lineWidth = 5;
//        ctx.strokeStyle = '#003300';
//        ctx.stroke();



        //绘制边框
       ctx.strokeStyle = bdc;
       ctx.lineWidth = 1;
       ctx.strokeRect(0,0,cw,ch);

//        //添加图片
       // fs.readFile(__dirname + '\\pic.png', function(err, pic){
       //     if (err) throw err;
       //     img = new Image;
       //     img.src = pic;
       //     ctx.drawImage(img,0,0,cw,ch);
       //     reply(canvas.toBuffer()).type('image/png');
       // });

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
