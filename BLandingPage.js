$("a").click(function(e) {
    e.preventDefault();
});

if ($(window).width() <= 500) {
    $(".menu").click(function(){
        if ($(".mobile-menu").css("display") === "grid") {
            $(".mobile-menu").css("display", "none");
        } else {
            $(".mobile-menu").css("display", "grid");
        }
    });
    $(document).click(function() {
        $(".mobile-menu").css("display", "none");
    })
}