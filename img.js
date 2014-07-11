var Canvas = require('canvas');
var Image  = Canvas.Image;
var Draw = function(conf){
    this.width =  parseInt(conf.w || conf.width || 200,10);
    this.height = parseInt(conf.h || conf.height || 200,10);
    this.fontText = this.width + 'X' +this.height;
    this.fontSize = conf.fontSize || "24px";
    this.fontFamily= conf.fontFamily || "sans-serif";
    this.fontColor= conf.fontColor || "#000";
    this.textAlign= conf.textAlign || "center";
    this.background = conf.background || conf.bgn? conf.bgn : conf.bgc || conf.bgn || "#09f";
};

Draw.prototype.gen = function(){
    var self =this;
    var canvas = new Canvas(self.width,self.height);
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = self.background;
    ctx.fillRect(0,0,self.width,self.height);
//        ctx.strokeStyle="blue";
//        ctx.moveTo(cw/2,0);
//        ctx.lineTo(cw/2,ch);
//        ctx.stroke();

    ctx.font = self.fontSize +"px Sans Serif";
    ctx.fillStyle = self.fontColor;
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
    ctx.fillText(self.fontText,self.width/2,self.height/2);
    //ctx.font = self.fontSize +"px Sans Serif";
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
//    ctx.strokeStyle = self.background;
//    ctx.lineWidth = 1;
//    ctx.strokeRect(0,0,self.width,self.height);
//
////        //添加图片
//       // fs.readFile(__dirname + '\\pic.png', function(err, pic){
//       //     if (err) throw err;
//       //     img = new Image;
//       //     img.src = pic;
//       //     ctx.drawImage(img,0,0,cw,ch);
//       //     reply(canvas.toBuffer()).type('image/png');
//       // });

     return canvas;
};

Draw.prototype.circle = function(){

};

exports = module.exports = Draw;