
let sections = document.querySelectorAll('section');



$(window).scroll(function () { 
    let offset = $(window).scrollTop();
 
   
    if (offset > 150) {
      
        $('.navbar').addClass('bg-white');
        $('.nav-link').css({'color': "black"})
        $('.numberphone').css({'color': '#14B789', 'border': '2px solid #14B789'})
        $('.call').css({'backgroundColor': '#14B789'})
        $('.call i').css({'color': '#fff'})

    }else{
        $('.navbar').removeClass('bg-white');
         $('.nav-link').css({'color': "#fff"});
         $('.numberphone').css({'color': '#fff', 'border': '2px solid #fff'});
         $('.call').css({'backgroundColor': '#fff'})
         $('.call i').css({'color': 'black'})
    }

    
    addClassonscroll()


});


let addClassonscroll = function () {
  
  sections.forEach(currentItem => {
    let offset = $(window).scrollTop();
    let offsetofele =  $(currentItem).offset().top;
    let outerHeight = $(currentItem).outerHeight(true); 
   
 
  if (offset > (offsetofele -50) && offset< (offsetofele + outerHeight)  ) {
    let eleId = $(currentItem).attr('id');




    $('.navbar a.active').removeClass('active');
    $(`.navbar a[href='#${eleId}']`).addClass('active');
  
  }
  })
}

$(window).on('resize', function() {
    let width = $(window).width();
   
  if (width <= 992) {
   
    $('.navbar').addClass('bg-white');
    $('.nav-link').css({'color': "black"})
    $('.numberphone').css({'color': '#14B789', 'border': '2px solid #14B789'})
    $('.call').css({'backgroundColor': '#14B789'})
    $('.call i').css({'color': '#fff'})
  }else{
    $('.navbar').removeClass('bg-white');
    $('.nav-link').css({'color': "#fff"});
    $('.numberphone').css({'color': '#fff', 'border': '2px solid #fff'});
    $('.call').css({'backgroundColor': '#fff'})
    $('.call i').css({'color': 'black'})
  }
});



$(document).ready(function () {
  $('.popup-img').magnificPopup({
    type: 'image',
    removalDelay: 300,
    // other options
    gallery:{
      enabled:true
    },
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it

      duration: 500, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function

      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
});


$('.navbar a').click(function (e) { 
  e.preventDefault();
  let href = $(e.target).attr('href');
  let targetoffset = $(href).offset().top

  $('html,body').animate({scrollTop:targetoffset},500);
  $('.navbar a').removeClass('active');
  $(e.target).addClass('active')
  
  
});


// scroll to top
$('.scrolltop').click(function (e) { 
  e.preventDefault();
  $(window).scrollTop(0)
  
});

// wow plugins

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

