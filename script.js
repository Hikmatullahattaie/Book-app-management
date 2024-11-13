$(document).ready(function () {
    $(".btn-close").click(function(){
      $(".toast").hide()
    })
    $("#addBook").click(function(){
      const song = $("#add")[0];
      song.play();
  
    });
  
      loadBooks();
  
     
  
     
  });