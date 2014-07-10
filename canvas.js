exports = module.exports = function(){
    var Canvas = require('canvas');
    var Image  = Canvas.Image;

    var draw = function(){
        this.width =  w || width || 200;
        this.height = h || height || 200;

        this.fontSize = fontSize || "24px";
        this.fontFamily= fontFamily || "sans-serif";
        this.fontColor= fontColor || "#000";
        this.textAlign= textAlign || "center";
        this.background = background || "##09f";

    };

    draw.prototype.constructor = function(){

    };
    draw.prototype.gen = function(){
        var self =this;
    };

    draw.prototype.circle = function(){

    };
};