jQuery(document).ready(function($){
 
  // LOGIN TOGGLE
  $('.loginButton').click(function(){
    $('.signupBox').css({
      'margin-top': '-95px',
      'display': 'none'
    });
    $('.popupWrapper').fadeIn(1000, function(){
      $('.loginBox').css({
        'display': 'flex',
        'margin-top': '0'
      });
    });
  });

  // SIGNUP TOGGLE
  $('.signupButton').click(function(){
    $('.loginBox').css({
      'display': 'none',
      'margin-top': '-95px'
    });
    $('.popupWrapper').fadeIn(1000, function(){
      $('.signupBox').css({
        'display': 'flex',
        'margin-top': '0'
      });
    });
  });

  // CLOSE BUTTON
  $('.closeToggle').click(function(){
    $('.popupWrapper').fadeOut(500, function(){
      $('.loginBox').css({
        'display': 'none',
        'margin-top': '-95px'
      });
      $('.signupBox').css({
        'display': 'none',
        'margin-top': '-95px'
      });
    });
  });


  // HEADER MOD
  $(window).scroll(function() {
  var winHeight = $(this).scrollTop();
  if (winHeight > 50){
    $('#header')[0].style.backgroundColor="#fff";
  }else if(winHeight < 50){
    $('#header')[0].style.backgroundColor="rgba(255, 255, 255, 0.2)";
  }
  });

  // USERS IMG MOD
  $('.user>div').first().hover(
    function() {
      $(this).fadeOut('slow', 'linear', function(){
        $(this).toggleClass( "graduateInverted" );
        $(this).show();
      });
    }, function() {
      $(this).fadeOut('slow', function(){
        $(this).toggleClass( "graduateInverted" );
        $(this).show();
      });
    }
  );
  $('.user>div').last().hover(
    function() {
      $(this).fadeOut('slow', function(){
        $(this).toggleClass( "employerInverted" );
        $(this).show();
      });
    }, function() {
      $(this).fadeOut('slow', function(){
        $(this).toggleClass( "employerInverted" );
        $(this).show();
      });
    }
  );


    // LOGO SWITCH
  $(window).scroll(function() {
    var hT = $('.feedBack').offset().top,
        hH = $('.feedBack').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (hT+hH-wH)){
      $('.logoArea>img')[0].src = '/static/imgs/logo/verifrLogoInverted.png';
    }
    if (wS < (hT+hH-wH)){
      $('.logoArea>img')[0].src = '/static/imgs/logo/verifrLogo.png';
    }
  });


  // MOBILE NAV
  $('.mobileNavToggle').click(()=>{
    var navWidth = $('.mobileNav').css('width');
    if(navWidth == '0px'){
      $('.mobileNav').css({
        width: '100%'
      });
      $('.mobileNavToggle').html('<i class="fas fa-times"></i>');
    }else{
      $('.mobileNav').css({
        width: '0%'
      });
      $('.mobileNavToggle').html('<i class="fas fa-bars"></i>');
    }
    
  });
  // HERO BACKGROUND IMAGE SCROLL
  // $('.wrapper').fullClip({
  //   images: ['/static/imgs/bgScroll/2.jpg', '/static/imgs/bgScroll/3.jpg', '/static/imgs/bgScroll/4.jpg', '/static/imgs/bgScroll/1.jpg'],
  //   transitionTime: 2000,
  //   wait: 5000
  // });

  $('.formRight>form').submit(function(e){
    e.preventDefault();
    if($('.formRight>form>li>input').val() == ''){
      alert('You need to enter your details');
    }else{
      // alert('Submitted!');
      $('.formRight>form>li>button')[0].innerHTML='<i class="fas fa-sync fa-spin"></i>';
    }
  });

  $('.formRight>form>li>input').focus(function(){
    $('.formRight>form>li>label').css({
      'font-size': '12px',
      'padding': '0px',
      'top': '-32px'
    });
    // $('.formRight>form>li:first-child').css('display', 'none');
  });
  $('.formRight>form>li>input').blur(function(){
    if($(this).val() == ''){
    $('.formRight>form>li>label').css({
      'font-size': '16px',
      'padding': '0px 6px',
      'top': '0px'
    });
    $(this).val('');
    }
    // $('.formRight>form>li:first-child').css('display', 'block');
  });

  // FAQS TOGGLE
  // Hide all faqBody
  $('.faqBody').hide();

  $('.faqsWrap button').click(function(){
    var $this = $(this);
    $('.faqBody').slideUp();
    $this.parent().next().slideDown();
  });

});