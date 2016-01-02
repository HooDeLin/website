for (var i in sections) {
    var section = sections[i];
    $.ajax({
        type: 'GET',
        async: false,
        url: section + '.html',
        error: function() {
        },
        success: function(data) {
            $('#' + section).html(data);
        }
    });
}
$('#modal').remove();
$('#overlay').remove();


$('a').click(function() {
    var adjustment = 73;
    var speed = 1;
    var header = this.hash;
    $('html,body').animate({
        scrollTop: $(header).offset().top - adjustment
    }, speed);
});

function isTableOfContentVisible() {
    var windowTop = $(window).scrollTop();
    var tableTop = $('#table-of-contents').offset().top;
    var tableBottom = $('#table-of-contents').height() + tableTop;
    return windowTop < tableBottom;
}

function makeBackToTopButton(buttonAnimationDuration) {    
    var speed = 1;
    $("#back-to-top-button").css("display", "none");
    $('#back-to-top-button').click(function(e) {
        $("#back-to-top-button").fadeOut(buttonAnimationDuration);
        $('html, body').animate({
            scrollTop: 0
        }, speed);
    });
}

$(document).ready(function() {
    var buttonAnimationDuration = 500;
    makeBackToTopButton(buttonAnimationDuration);
    $(window).scroll(function() {
        if (!isTableOfContentVisible()) {
            $('#back-to-top-button').fadeIn(buttonAnimationDuration);
        } else {
            $('#back-to-top-button').fadeOut(buttonAnimationDuration);
        }
    })
});
