$(document).ready(function(){

  $(".send-message").click(
    function () {
      sendMessage();
      setTimeout(timerFunction, 1000);
    }
  );
  $("#input-message").keyup(
    function (event) {
      if(event.which == 13){
        sendMessage();
        setTimeout(timerFunction, 1000);
      }
    }
  );

});


function sendMessage() {
 var inputText = $("#input-message").val();
  if(inputText != ""){
    var templatemessage = $(".template .message-row").clone();
    var date = new Date();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    if(minutes<10){
     var time = hours + " : " + "0 " + minutes;
    } else{
     var time = hours + " : " + minutes;
    }


    templatemessage.find(".message-text").text(inputText);
    templatemessage.find(".message-ora").text(time);
    templatemessage.addClass("send");

    $(".main-right").append(templatemessage);
    $("#input-message").val("");
  }
}

function timerFunction (){
  var templatemessage = $(".template .message").clone();
  var date = new Date();
  var hours = date.getHours()
  var minutes = date.getMinutes()
  if(minutes<10){
   var time = hours + " : " + "0 " + minutes;
  } else{
   var time = hours + " : " + minutes;
  }

  templatemessage.find(".message-text").text("Ok");
  templatemessage.find(".message-ora").text(time);

  $(".main-right").append(templatemessage);
}
