// LOGO SWITCH
$(window).scroll(function() {
  var hT = $('.feedBack').offset().top,
      hH = $('.feedBack').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    $('.logoArea>img')[0].src = 'http://127.0.0.1:5500/templates/imgs/verifrLogoInverted.png';
  }
  if (wS < (hT+hH-wH)){
    $('.logoArea>img')[0].src = 'http://127.0.0.1:5500/templates/imgs/verifrLogo.png';
  }
});


// HERO BACKGROUND IMAGE SCROLL
$('.wrapper').fullClip({
  images: ['imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/1.jpg'],
  transitionTime: 2000,
  wait: 5000
});
