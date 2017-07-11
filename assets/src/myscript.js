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

  //create table via ally-code.json file
  $.getJSON("http://127.0.0.1:8080/data/code-test.json", function(json){
    var rateList = ''
    var tr = '';
    var urbank = json.filter(function(val){
      return val["name"] === "URBank";
    });
    var banks = json.filter(function(val){
      return val["name"] !== "URBank";
    });

    function createRateChart(obj){
      var keys = Object.keys(obj);
      tr += '<tr>';
      
      keys.forEach(function(key){
        switch(key){ 
          case 'apy':
            tr += '<td>' + obj[key] + '%</td>';
            break;
          case 'earnings':
            tr += '<td>$' + obj[key] + '</td>';
            break;
          default:
            tr += '<td>' + obj[key] + '</td>'
        }
      });

      tr += '</tr>'
    }

    urbank.forEach(createRateChart);
    banks.forEach(createRateChart);

    $('tbody').append(tr);
     
  })

  $(window).on('resize', function(){
    if($(window).width() <= 700) {
      var navbar = '<button id="navbar">&#9776</button>'
      $('.nav').css({"display":"none"});
      if(!$('#navbar').length) {
        $("header").append(navbar);
        $("#navbar").css({"background":"transparent","border":"none","font-size":"2rem","height":"45px","width":"45px"});
        $('#navbar').on('click', function(){
          var navList = "<nav class='nav_list'><a href='#'><li class='nav_links'>home</li></a><a href='#'><li class='nav_links'>employee</li></a><a href='#'><li class='nav_links'>Company</li></a><a href='#'><li class='nav_links'>services</li></a><a href='#'><li class='nav_links'>contact</li></a></nav>"
          
          if(!$('.nav_list').length) {
            $("header").after(navList);
          }else{
            $('.nav_list').toggle();
          }
        })
      }
    }else{
      $('.nav').css({"display":"inherit"});
      $('#navbar').remove();
      $('.nav_list').remove();
    }
  })

  

 
   



});