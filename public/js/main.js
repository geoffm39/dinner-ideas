$("#explore-button, #search-icon").click(function() {
    $(".content").fadeOut(500, function() {
        window.location.href = "/search";    
    });
});

$("#home-icon").click(function() {
    $(".content").fadeOut(500, function() {
        window.location.href = "/";    
    });
});