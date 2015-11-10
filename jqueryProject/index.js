$(document).ready(function(){
  $('#selected-plays > li').addClass('horizontal');
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('#switcher h3').click(function(){
    $('#switcher button').toggleClass('hidden');
  });

  $('#switcher h3').hover(function(){
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
  });
});
