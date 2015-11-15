$(document).ready(function(){
  $("#list").on('click', function(event){
    var node = event.target;
    alert($(node).attr("id"));
  });

  $(".wrap").on('click', function(event){
    alert($(this).attr("id"));
    var node = event.target;
    // alert($(node).attr("class"));
  });

});
