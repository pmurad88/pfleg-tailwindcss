$(document).ready(function(){
    $('.accordion-content').hide();
    $(".accordion-title").on("click", function(){
        $(this).parent().siblings().children(".accordion-content").slideUp();
        $(this).parent().siblings().children(".accordion-title").removeClass('active');
        $(this).toggleClass("active").parent().children(".accordion-content").slideToggle();
    });

    $(".rostock").isotope();
    
    $('body').prepend('<div class="go-top"><i class="fa-solid fa-angle-up"></i></div>')
     $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $(".go-top").fadeIn();
        }else{
            $(".go-top").fadeOut();
        }
     });
     $(".go-top").on('click', function(){
        $("body, html").animate({scrollTop:0}, 999);
     });


     $(".h-menu").clone().prependTo(".mobile-menu");
    $(".menutrigger").on('click', function(){
    $(this).toggleClass("active");
    $(".mobile-menu").stop(true,false,true).slideToggle();
    
    $('body').toggleClass('overflow-hidden');
    });

});