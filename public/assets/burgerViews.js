


$(function() {
    $(".notEaten").on("click", function (event) {
        console.log("clicked")
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log("clicked");

        var newBurger = {
            burger_name: $("#newHamburger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("working");
            location.reload()
        });
    });

});