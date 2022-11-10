
/* اي فاكشن خاصة بتحديد ارتفاع سلايدر وهو انه يكون ع كامل بدي شاشة من خلال معادلة ارتفاع شاشة نقصه من مجموع ارتفاع قائمة علوية وقائمة الرئيسية */
$(function ( ) 
 {
   'use strict'; 
      var windowHeight =$(window).height() ,
        upperNavbar=$('.upper-navbar').innerHeight(),  
        mainNavbar = $('.navbar').innerHeight();
    
    
    $('.slider,.carousel-item').height(windowHeight-(upperNavbar + mainNavbar));  


/*this function for faetured work when press on any chooses come pictures that realated with it */
$('.publish-buttton').on('click',function()
{
   alert('This service is under maintenance'); 
});
    
$('.advertisment-button').on('click',function()
{
   alert('This service is under development'); 
});    
    
    
$('.feature-work ul li').on('click',function()
  {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).data('class')==='all')
       {
           $('.shuffle-imgs .col-md ').css('opacity',1);
           
       
       }
    else
        {
            $('.shuffle-imgs .col-md ').css('opacity','0.09');
            $($(this).data('class')).parent().css('opacity',1);
        }
});
    
/************************************************************************************************/
    /* this for phone icon*/
   $('.contact-phone').hover(function()
   {
   $(this).css("background-color","#fff");
   $('.phone-icon').css('color','tan');
    $(this).css('border-color','tan');    
   });
    
    
$('.contact-phone').mouseleave(function()
   {
   $(this).css("background-color","#FFF");
   $('.phone-icon').css('color','teal');       
    $(this).css('border-color','teal');       
   });  
/************************************************************************************************/    
/*$('.jjj .carousel-item .carousel-caption ').hover( function()
  {
    $('.jjj .carousel-item .carousel-caption a').show();
});
 $('.jjj .carousel-item .carousel-caption ').mouseleave( function()
  {
    $('.jjj .carousel-item .carousel-caption a').hide();
});*/   

    
/************************************************************************************************/
/* this for email icon*/
  $('.contact-email').hover(function()
   {
   $(this).css("background-color","#fff");
   $('.email-icon').css('color','tan');
    $(this).css('border-color','tan');    
   });
    
    
$('.contact-email').mouseleave(function()
   {
   $(this).css("background-color","#fff");
   $('.email-icon').css('color','teal');       
    $(this).css('border-color','teal');       
   });    
});
/**************************************************************************************************/



/*************************************************************************************************/
$('.navbar-light .navbar-nav .nav-link').hover(function() /* when mouse near of navbar item*/
{
    $(this).css('color','tan');
} );

$('.navbar-light .navbar-nav .nav-link').mouseleave(function() /* when mouseleave from navbar item*/
{
    $(this).css('color','teal');
} );
/**************************************************************************************************/
$('.chooses-of-book-page li a').hover( function()
  {
    
    if($(this).data('class')==='download-icon')
       {
           $('.chooses-of-book-page li a img ').css('background-color','white');
           
       
       }
    else if ($(this).data('class')==='buy-book-icon')
        {
            $('.chooses-of-book-page li a img ').css('background-color','white');
            
        }
    else if ($(this).data('class')==='latest books-icon')
        {
            $('.chooses-of-book-page li a img ').css('background-color','white');
        }
    
});
/*******************************************************************************/

$(document).ready(function () {
    var divs = $('.pricing-table .row');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("button[name=next]").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function (e) {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // or .css('display','block');
        //console.log(divs.length, now);
    });
}); 

$(document).ready(function () {
    var divs = $('.latest-post .row');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("button[name=next]").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
    $("button[name=prev]").click(function (e) {
        divs.eq(now).hide();
        now = (now > 0) ? now - 1 : divs.length - 1;
        divs.eq(now).show(); // or .css('display','block');
        //console.log(divs.length, now);
    });
}); 



/**************************************************************************************************/

function bbb(btn,elem)
        {
            var boton=$(btn);
            var elemnt=$(elem);
            html2canvas(elemnt, {
                onrendered: function (canvas) {
                    $("#previewImage").append(canvas);
                    getCanvas = canvas;
                }
            });
            $(boton).on('click', function () {
                var imgageData = getCanvas.toDataURL("image/png");
                // Now browser starts downloading it instead of just showing it
                var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
                $(boton).attr("download", "your_pic_name.png").attr("href", newData);
            });
        } ;




