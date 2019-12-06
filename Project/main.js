$('.mobile-tab').hide();

$(document).ready(function() {
    $('#burg').click(function() {
        $('.mobile-tab').slideToggle("slow");
    })
}) 


function slowScroll(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000);
}