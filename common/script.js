// $('#foo').click(function() {
//     $(this).addClass('clicked');
// });
$('.navmenu button').click(function() {
    $(this).addClass('clicked');
});
// $('.nav').click(function() {
//     $('.fas').style.color='yellow';
//     $(this).addClass('clicked');
// });
// $('.fa-home').click(function(){
//     $(this).style.color='yellow';
// });

// a=document.getElementById('ak')
// a.style.fontSize='70px';
// a.style.backgroundColor='blue';

// home=document.getElementById('home');

home=document.querySelector('.home a i');
about=document.querySelector('.about a i');
skills=document.querySelector('.skills a i');
contact=document.querySelector('.contact a i');
$('.home a').click(function () {
    // body...
    home.style.color='red';
    about.style.color='#337ab7';
    skills.style.color='#337ab7';
    contact.style.color='#337ab7';
})
$('.about a').click(function () {
    // body...
    home.style.color='#337ab7';
    about.style.color='red';
    skills.style.color='#337ab7';
    contact.style.color='#337ab7';
})
$('.contact a').click(function () {
    // body...
    home.style.color='#337ab7';
    about.style.color='#337ab7';
    skills.style.color='#337ab7';
    contact.style.color='red';
})
$('.skills a').click(function () {
    // body...
    home.style.color='#337ab7';
    about.style.color='#337ab7';
    skills.style.color='red';
    contact.style.color='#337ab7';
})

$(document).ready(function() {
  $(".animsition-overlay").animsition({
    inClass: 'overlay-slide-in-right',
    outClass: 'overlay-slide-out-right',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : true,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

// $('.rubber').hover(function(){
//         $(this).addClass('rubber-band');
// },function(){
//     $('.rubber-band').delay(1000).removeClass('rubber-band');
// }
// );
function delayHover (element) {
    timer = setTimeout ( function () {
        $(element).removeClass("rubber-band");
}, 800);
};
//Then, change the CSS classes when the document is loaded:

$(document).ready(function() {
  $(".rubber").removeClass("rubber-band");

  $('.rubber').hover( 
    function () {
        my_element = $(this);
        clearTimeout(timer);
        $(my_element).addClass("rubber-band");
            
    },
    function () {
        my_element=$('.rubber-band');
        delayHover(my_element);
        // clearTimeout(timer);
        // $(my_element).removeClass("rubber-band");
        // $(my_element).css({'left':'-999em'});
    }
   );
});


function togglenav(){
    navbar=document.querySelector('#navbar');
    navbar.classList.toggle('active');
    navmenu=document.querySelector('.navmenu');
    // navmenu.style.transform='translateX(80px)';
    navmenu.classList.toggle('active');
}
