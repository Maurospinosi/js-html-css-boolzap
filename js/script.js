$(document).ready(function(){

  $(".send-message").click(  // Funzione per inviare i messaggi con il click sull'icona
    function () {
      sendMessage();
    }
  );
  $("#input-message").keyup( // Funzione per inviare i messaggi con invio
    function (event) {
      if(event.which == 13){
        sendMessage();
      }
    }
  );
  $("#search-name").keyup(  //Funzione per cercare i contatti nella barra di ricerca
    function () {

      var searchInput = $(this).val().toLowerCase();
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

 $(document).on("click", ".show-mex-menu", // funzione per mostrare il "menù messaggi" : info messaggio, cancella messaggio
  function(){
    $(this).siblings(".show-mex-menu-si").toggle();
  }
);
  $(document).on("click", ".delate-mex",  //Funzione per cancellare un messagio
   function(){
     $(this).parents(".message-row").remove();
   }
  );

  //Funzioni per cambiare la chat in base al contatto cliccato
  $(document).on("click", ".contatto-1",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-uno").addClass("active");
     $(".pag-utente-1").addClass("active");
   }
  );
  $(document).on("click", ".contatto-2",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-due").addClass("active");
     $(".pag-utente-2").addClass("active");
   }
  );
  $(document).on("click", ".contatto-3",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-tre").addClass("active");
     $(".pag-utente-3").addClass("active");
   }
  );
  $(document).on("click", ".contatto-4",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-quattro").addClass("active");
     $(".pag-utente-4").addClass("active");
   }
  );
  $(document).on("click", ".contatto-5",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-cinque").addClass("active");
     $(".pag-utente-5").addClass("active");
   }
  );
  $(document).on("click", ".contatto-6",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-sei").addClass("active");
     $(".pag-utente-6").addClass("active");
   }
  );
  $(document).on("click", ".contatto-7",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-sette").addClass("active");
     $(".pag-utente-7").addClass("active");
   }
  );
  $(document).on("click", ".contatto-8",
   function(){
     $(".chat-contatto").removeClass("active");
     $(".contatto-otto").addClass("active");
     $(".pag-utente-8").addClass("active");
   }
  );

});

//Funzione che invia un messaggio scritto dall'utente nella barra input , clona la riga e "appende" tutto nella chat
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

    $(".active .main-right").append(templatemessage);
    $("#input-message").val("");
    setTimeout(mexFunction, 1500);
    setTimeout(returnFunction, 3000);
    setTimeout(timerFunction, 2800);
  }
}

function mexFunction(){
  $(".active .accesss").text("Sta scrivendo....");
}
function returnFunction(){
  var date = new Date();
  var hours = date.getHours()
  var minutes = date.getMinutes()
  if(minutes<10){
   var time = hours + " : " + "0" + minutes;
  } else{
   var time = hours + " : " + minutes;
  }
  $(".active .accesss").text("Utimo acesso oggi alle ore" + " " + time);
}
// Funzione che dopo 1 sec (vedi funzione timerFunction riga 125) stampa come risposta "ok" tutto con orari aggiornati
function timerFunction (){
  var templatesmessage = $(".template .message-row").clone();
  var date = new Date();
  var hours = date.getHours()
  var minutes = date.getMinutes()
  if(minutes<10){
   var time = hours + " : " + "0" + minutes;
  } else{
   var time = hours + " : " + minutes;
  }

  templatesmessage.find(".message-text").text("Ok");
  templatesmessage.find(".message-ora").text(time);
  templatesmessage.removeClass("send");

  $(".active .main-right").append(templatesmessage);
}
