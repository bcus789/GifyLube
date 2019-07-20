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
    renderButtons();
});