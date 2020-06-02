


$(function() {
    //When the not eaten button is clicked on, update the table's boolean using put and update. Then reload the page.
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

    //When the not submit button is clicked on, add a new item using post and insert. Then reload the page.
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