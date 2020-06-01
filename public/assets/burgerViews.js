


$(function() {
    $(".notEaten").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);

        var newEatenState = {
            devoured: true
        }
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function() {
            console.log("ajax ran");
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newHamburger").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("working")
            location.reload()
        });
    });

});