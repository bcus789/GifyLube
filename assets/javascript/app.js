$(document).ready(function() {
    var movies = ['Laptop', 'Git Bash', 'Git Hub', 'a noose'];

    function renderButtons() {
        $('#moviePage').empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $('<button>');
            a.addClass('movie');
            a.attr('data-name', movies[i]);
            a.text(movies[i]);
            $('#moviePage').append(a);
        }
    }
    $('#add-movie').on('click', function(event) {
        event.preventDefault();
        var movie = $('#movie-input')
            .val()
            .trim();
        movies.push(movie);
        renderButtons();
    });

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movies + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var personImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    personImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }
            }
        })

    renderButtons();

})