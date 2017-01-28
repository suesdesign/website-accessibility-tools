/*
 * Author: Sue Johnson
 * Author URL: http://suesdesign.co.uk/
 * License: MIT
 * Version: 1.0
 * Demo: http://accessibility.suesdesign.co.uk/
 */


(function($){ 

// Declare variables

var fontSize, styleChange;

//Change background and text colour

function backgroundChange(){
    switch(styleChange){
        case 'lowcontrast-a':
        $('body').addClass('lowcontrast');
        break;

        case 'highcontrast-a':
        $('body').addClass('highcontrast');
        break;

        default:
    };
};

// Place accessibility elements on page

$('div#accessibility').prepend('\
    <ul id="textsize"><li><a class="textsmaller" href="#">A-</a></li>\
    <li><a class="textlarger" href="#">A+</a></li></ul>\
    <ul id="stylechange"><li><a class="normalcontrast-a" href="#">A</a></li>\
    <li><a class="lowcontrast-a" href="#">A</a></li>\
    <li><a class="highcontrast-a" href="#">A</a></li></ul>');

   
if (sessionStorage.getItem('fontsize') == null){
        fontSize = $('body').css('font-size');
    } else {fontSize = sessionStorage.getItem('fontsize');
    };

    fontSize = parseInt(fontSize); 

     $('body, article p').css({'font-size':fontSize});
 

// Enlarge and decrease font size

$('#textsize a').click(function(e) {
      e.preventDefault();

// Increase or decrease font-size
   
    if ($(this).hasClass('textlarger')) {
        fontSize = fontSize + 2;
        if (fontSize >= 30) {
            fontSize = 30;
        }
    } else {
           fontSize = fontSize - 2;
        if (fontSize <= 12) {
            fontSize = 12;
        }
    }

// Add font-size to body 
   
    $('body, article p').css({'font-size':fontSize});

// Store font-size
    
    sessionStorage.setItem('fontsize', fontSize);   
});

if (sessionStorage.getItem('stylechange') !== null){
    styleChange = sessionStorage.getItem('stylechange');
    backgroundChange();
};

// Stop default action from links

$('#stylechange a').click(function(e){
    e.preventDefault();

// Remove class from body if set 

 $('body').removeClass('lowcontrast highcontrast');

// Get value of current class   
    styleChange = $(this).attr('class');    
    backgroundChange();

// Store style selection
    sessionStorage.setItem('stylechange', styleChange);

});

})(jQuery);