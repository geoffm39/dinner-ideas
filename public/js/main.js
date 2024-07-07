$("#explore-button, #menu").click(function() {
    $(".content").fadeOut(500, function() {
        window.location.href = "/search";    
    });
});
