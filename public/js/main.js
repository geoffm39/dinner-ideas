$("#explore-button").click(function() {
    $("#welcome").fadeOut(500, function() {
        window.location.href = "/search";    
    });
});
