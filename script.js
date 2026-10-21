var bookcase = $("#bookcase");
var calrem = $("#calrem");
var readBook = false;
var evil = false;
var frontbuilds = $("#frontbuilds");

bookcase.on("click", function(){
    if(!readBook){
        var change = ($(this).attr("src")==="images/bookcaseHaveOn.png")?"images/bookcaseHaveNotOn.png":"images/bookcaseHaveOn.png";
        $(this).attr("src", change);
        $("#diaryread").attr("style", "position: absolute; z-index:45; margin-left: 125%; transform: translateY(-20px); -moz-transform: translateY(-20px);")
        $("#diaryread").append("<img style='z-index: 50' src='images/bookRead.png' id='read'/>");
        readBook = true;
    }else{
        removeFunc();
    }
});

calrem.on("click", function(){
    $(this).attr("class", "play");
});

frontbuilds.on("click", function(){
    if(!evil){
        $(this).attr("src", "images/frontBuildsEvil2.png");
        evil = true;
    }else{
        $(this).attr("src", "images/frontbuilds2.png");
        evil = false;
    }
});

function changeAnim(){
    console.log("a");
    var change = (frontbuilds.attr("src")==="images/frontBuildsEvil.png")?"images/frontBuildsEvil2.png":"images/frontBuildsEvil.png";
    frontbuilds.attr("src", change);
}

function removeFunc(){
    $("#diaryread").empty();
    $("#diaryread").attr("style", "");
    readBook = false;
    var change = (bookcase.attr("src")==="images/bookcaseHaveOn.png")?"images/bookcaseHaveNotOn.png":"images/bookcaseHaveOn.png";
    bookcase.attr("src", change);
}

function onHover(){
    calrem.attr("src", "images/calendarRemHover.png");
}
function offHover(){
    calrem.attr("src", "images/calendarRem.png");
}

function haveHover(){
    if(bookcase.attr("src").includes("bookcaseHaveOff")){
        bookcase.attr("src", "images/bookcaseHaveOn.png");
    }
}
function haveOff(){
    if(bookcase.attr("src").includes("bookcaseHaveOn")){
        bookcase.attr("src", "images/bookcaseHaveOff.png");
    }
}