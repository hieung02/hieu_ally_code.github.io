$(document).ready(function(){
  // display login form
  $(".login_btn").on("click", function(){
    $(".login_container").css({"display":"block"});
  });
  
  // exit login form
  $(".exit_login").on("click", function(){
    $(".login_container").css({"display":"none"});
  });


  $(".tab_links").on("click", function(e){
    var tab = "#" + e.currentTarget.innerText.toLowerCase();
    
    //remove all button that contains 'active' class
    $(".tab button.active").removeClass('active');
    //add 'active' class to btn
    $(this).addClass('active');
    
    //remove 'active' class from children of tab_content 
    $(".tab_content section.active").removeClass('active');
    //add 'active' to section with id=tab
    $(tab).addClass('active');
  });
});