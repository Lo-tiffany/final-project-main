/* - - - - - - - - - - - Start Study selector - - - - - - - - - - - */
var interval = null;
var all;
var count = 0;
var chosen = 0;
function create(){
    all = $("#optInput").val();
    var code = "";
    all = all.split('\n');
    if(all.length > 2 && all[all.length - 1] != ''){
        for(var i = 0; i<all.length; i++){
            code += "<div class='oneOpt' id='opt-"+i+"'>"+all[i]+"</div>";
        }
        $("#errorM").html('');

        $("#2ndTitle").addClass("changed");
        $("#optionArea").addClass("changed");
        setTimeout(function(){
        $("#2ndTitle").removeClass("changed");
        $("#optionArea").removeClass("changed");
        },1000);

        $("#2ndTitle").html("按下開始鍵，讓我們幫你決定吧 !");
        $("#optionArea").html(code);
        $("#btnArea").html('<input type="button" value="繼續新增" style="margin-right:60px;" onclick="back()"/>'+
        '<input type="button" value="開始決定" onclick="start()"/>')
    }else{
        $("#errorM").addClass("changed");
        setTimeout(function(){
        $("#errorM").removeClass("changed");
        },1000);

        $("#errorM").html(" - - - - 請至少輸入三個選項，並將多餘的換行刪除 - - - - ");
    }
}
function start(){

    $("#2ndTitle").addClass("changed");
        setTimeout(function(){
        $("#2ndTitle").removeClass("changed");
        },1000);

    $("#result").css("margin","0px 0");
    $("#result").html("<br>");
    $("#2ndTitle").html("A Few Moment Later ......");
    interval = window.setInterval("choose()",50);
}
function choose(){
    // console.log(length);
    if(count == 60){
        
        $("#opt-"+chosen).css("background-color","#909497");
        chosen = parseInt(Math.random() * all.length);
        $("#opt-"+chosen).css("background-color","#F1948A");
        $("#result").css("margin","50px 0");

        $("#result").addClass("changed");
        $("#2ndTitle").addClass("changed");
        setTimeout(function(){
        $("#result").removeClass("changed");
        $("#2ndTitle").removeClass("changed");
        },1000);

        $("#result").html("現在 ， 我們來讀「"+all[chosen]+"」吧！");
        clearInterval(interval);
        $("#2ndTitle").html("你可以選擇繼續新增，或是開始決定");
        count = 0;
    }else{
        $("#opt-"+chosen).css("background-color","#909497");
        chosen = parseInt(Math.random() * all.length);
        $("#opt-"+chosen).css("background-color","#F1948A");
        count++;
    }
}
function clearBox(){
    $("#optInput").html("");
}
function clearBox2(){
    $(".pl").html("");
}
function back(){
    clearInterval(interval);
    $("#result").css("margin","0px 0");
    $("#result").html("<br>");
    $("#2ndTitle").addClass("changed");
        $("#optionArea").addClass("changed");
        setTimeout(function(){
        $("#2ndTitle").removeClass("changed");
        $("#optionArea").removeClass("changed");
        },1000);
    $("#2ndTitle").html("是不是每次都在猶豫自己要讀什麼呢 ? 包在我身上就對了 ! ! !");
    $("#optionArea").html('<textarea id="optInput" style="font-size: large;color:#C4C3C0;border-radius: 20px; width: 70%; height: 500px; padding: 30px; border: 2px solid black;">');
    var words = "";
    for(var i = 0; i<all.length; i++){
        if(i != 0){
            words += "&#10";
        }
        words += " " + all[i] + " ";
    }
    $("#optInput").html(words);
    $("#btnArea").html('<input type="button" value="清除選項" style="margin-right:60px;" onclick="clearBox()"/>'+
    '<input type="button" value="確認送出" onclick="create()"/>')
}
/* - - - - - - - - - - - End Study selector - - - - - - - - - - - */
