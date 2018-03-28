;(function(window){
    var headerEl = document.querySelector('.site-header');
    
    window.addEventListener('scroll', function(e){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || 0;
        if (scrollTop > 55) {
            headerEl.classList.add("scrolling");
        } else {
            headerEl.classList.remove("scrolling");
        }
    });
})(window);

// ----------------------
// Parallax Scrolling 
// ----------------------

var $window = $(window);

$('section[data-type="background"]').each(function(){
var $bgobj = $(this); // assigning the object
$(window).scroll(function() {
var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// Put together our final background position
var coords = '50% '+ yPos + 'px';
// Move the background
$bgobj.css({ backgroundPosition: coords });
});
});
// -----------------------
