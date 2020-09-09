$(document).ready(function(){

  $(".send-message").click(
    function () {
      sendMessage();
    }
  );
  $("#input-message").keyup(
    function (event) {
      if(event.which == 13){
        sendMessage();
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
     var time = hours + " " + minutes;

     templatemessage.find(".message-text").text(inputText);
     templatemessage.find(".message-ora").text(time);
     templatemessage.addClass("sent");

     $(".main-right").append(templatemessage);
     $("#input-message").val("");

    }
}
