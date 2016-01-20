$(document).ready(function(){
  $('.login-sublink').hide();
  var upArrow = $('.fa-chevron-up');
  upArrow.hide();
  var downArrow = $('.fa-chevron-down');
  var loginLinkList = $('.login-link-list');
  loginLinkList.on('click', function(e) {
    if(loginLinkList.find('ul.open').length>0){
      downArrow.show();
      upArrow.hide();
      loginLinkList.find('ul').slideUp().removeClass('open');
    }
    else if(loginLinkList.find('ul')){
      downArrow.hide();
      upArrow.show();
      loginLinkList.find('ul').slideDown().addClass('open');
    }
  });

  $('.contactus-li').on('click', function(e) {
    $('html,body').animate({
      scrollTop: $('.contact-us').offset().top 
    }, 'slow');
  });

  $('.aboutus-li').on('click', function(e) {
    $('html,body').animate({
      scrollTop: $('.about-us').offset().top 
    }, 'slow');
  });
});