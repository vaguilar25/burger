// Make sure we wait to attach our handlers until the DOM is fully loaded.
//Change the state of the burger
$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevourState = {
            devoured: true
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //Create New Burger
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        if ($("#bg").val().trim() != "") {
            var newBurger = {
                name: $("#bg").val().trim(),

            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {

                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });

    //Delete Burger
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("delete");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
