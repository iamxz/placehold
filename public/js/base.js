$(function(){
    $("#create").click(function(){
        var info = $("#form").serialize();
        var url = 'http://'+location.host+'/img?'+info;
        $("#url").val(url);
        $("#showImg").attr("src",url);
        $("#pre").text('<img src="'+url+'">');
        $("#url").select();
    });
});
