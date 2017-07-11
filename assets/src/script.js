$(document).ready(function(){
  $(".login_btn").on("click", function(){
    $(".login_container").css({"display":"block"});
  });
  
  $(".exit_login").on("click", function(){
    $(".login_container").css({"display":"none"});
  });
});