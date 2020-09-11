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
  $("#search-name").keyup(
    function () {

      var searchInput = $(this).val();
      var contactName = $(".access-name .contact-nome");

      contactName.each(function(){
        var names = $(this).text();
        names = names.toLowerCase();
        if (names.includes(searchInput) == true){
          $(this).parents(".access-name").show();
        } else {
          $(this).parents(".access-name").hide();
        }
      });
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
     var time = hours + " : " + "0" + minutes;
    } else{
     var time = hours + " : " + minutes;
    }

    templatemessage.find(".message-text").text(inputText);
    templatemessage.find(".message-ora").text(time);
    templatemessage.addClass("send");

    $(".main-right").append(templatemessage);
    $("#input-message").val("");
    setTimeout(timerFunction, 1000);
  }
}

function timerFunction (){
  var templatemessage = $(".template .message").clone();
  var date = new Date();
  var hours = date.getHours()
  var minutes = date.getMinutes()
  if(minutes<10){
   var time = hours + " : " + "0" + minutes;
  } else{
   var time = hours + " : " + minutes;
  }

  templatemessage.find(".message-text").text("Ok");
  templatemessage.find(".message-ora").text(time);


  $(".main-right").append(templatemessage);
}
