$(document).ready(function() {
    var movies = ['Laptop', 'Git Bash', 'Git Hub', 'a noose'];

    function renderButtons() {
        $('#moviePage').empty();
        for (var i = 0; i < movies.length; i++) {
            var a = $('<button>');
            a.addClass('movie');
            a.attr('data-name', movies[i]);
            a.text(movies[i]);
            $('#gifPage').append(a);
        }
    }
    $('#add-gif').on('click', function(event) {
        event.preventDefault();
        var movie = $('#gif-input')
            .val()
            .trim();
        movies.push(movie);
        renderButtons();
    });
    $('button').on('click', function() {
        // In this case, the "this" keyword refers to the button that was clicked
        var person = $(this).attr('data-person');
        var queryURL =
            'https://api.giphy.com/v1/gifs/search?q=' +
            movies +
            '&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10';

        $.ajax({
            url: queryURL,
            method: 'GET',})
            .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                console.log(results);

                if (results[i].rating !== 'r' && results[i].rating !== 'pg-13') {
                    var gifDiv = $('<div>');
                    var rating = results[i].rating;
                    var p = $('<p>').text('Rating: ' + rating);
                    var personImage = $('<img>');
                    personImage.attr('src', results[i].images.fixed_height.url);
                    gifDiv.append(p);
                    gifDiv.append(personImage);
                    $('#moviePage').prepend(gifDiv);
                }
            }
        });
    });
    renderButtons();
});