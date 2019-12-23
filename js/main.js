$(function() {
    $( "#upBtn" ).click(function(){
       $('#textBody').scrollTop($('#textBody').scrollTop()-20);
  }); 
 
  $( "#downBtn" ).click(function(){
      $('#textBody').scrollTop($('#textBody').scrollTop()+20);;
  }); 
 
 });