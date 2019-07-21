$(document).ready(function() {
    var movies = ['The Matrix', 'The Notebook', 'Mr. Nobody', 'The Lion King'];

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
        })

    renderButtons();
});