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
$(function() {
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
});
// -----------------------
// Email Validation
// -------------------------
function isEmail(email) {
  var validEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return validEmail.test(email);
}
jQuery(function($) {
  var $form = $('form.main-form');
  var $userInput = $form.find('input#input-email');
  var $emailErrorMessage = $form.find('.wrong-email');
  var $ctaBtn = $form.find('.read-more-btn');

  // bind events
  $form.submit(onSubmit);
  
  function onSubmit(event) {
    event.preventDefault();
    var emailValue = $userInput.val();
    if( isEmail(emailValue) ) { // valid email
      $emailErrorMessage.addClass('d-none');
      $ctaBtn.removeClass('disabled');
      console.log('email:', emailValue);
    } else {
      $emailErrorMessage.removeClass('d-none');
      $ctaBtn.addClass('disabled');
    }
  }
});
// -------------------------
