$(document).ready(function() {
    var gifs = ['Laptop', 'Git Bash', 'Git Hub', 'a noose'];

    //creates a button for every gif in the array
    function renderButtons() {
        $('#gifPlace').empty();
        for (var i = 0; i < gifs.length; i++) {
            var a = $('<button>');
            a.addClass('gif');
            a.attr('data-name', gifs[i]);
            a.text(gifs[i]);
            $('#gifPlace').append(a);
        }
    }
    //creates a new button based on input as long as there actually is one
    $('#add-gif').on('click', function(event) {
        if ($("#gif-input").val() == ""){
            alert("you gotta type something chump");
          } else {
        event.preventDefault();
        var gif = $('#gif-input')
            .val()
            .trim();
        gifs.push(gif);
        renderButtons();}
        
        
    
    $('button').on('click', function() {
        var queryURL =
            'https://api.giphy.com/v1/gifs/search?q=' +
            gif +
            '&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10';
            
        $.ajax({
            url: queryURL,
            method: 'GET',})
            .then(function(response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                console.log(results);

                if (true) {
                    var gifDiv = $('<div>');
                    var rating = results[i].rating;
                    var p = $('<p>').text('Rating: ' + rating);
                    var personImage = $('<img>');
                    personImage.attr('src', results[i].images.fixed_height.url);
                    gifDiv.append(p);
                    gifDiv.append(personImage);
                    $('#gifLube').prepend(gifDiv);
                }
            }
        });
    });
});
    renderButtons();
});