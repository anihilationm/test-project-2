(function() {
    $(".user-navbar li").on("click", function() {
        $(".move").removeClass("move");
        $(this).toggleClass("move");
    });

    var animationTrigger = $("#trigger");

    animationTrigger.click(function() {
        var move = $(this).css('left') === '320px' ? '0' : '320px';
        $(this).stop().animate({left: move});

        setTimeout("$('.contact-list').slideToggle()", 400);

    });


    /*$("#trigger:not(.open)").on("click", function() {
            $(this).animate({
                left: "320px"
            });
            $(this).addClass("open");
    });

    $("#trigger.open").on("click", function() {
        $(this).animate({
            left: "-320px"
        });
        $(this).removeClass("open")
    })*/
})();