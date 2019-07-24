$(document).ready(function() {
    var gifs = [];

    //creates a button for every gif in the array
    function renderButtons() {
        $('#gifPlace').empty();
        for (var i = 0; i < gifs.length; i++) {
            var gifButton = $('<button>');
            gifButton.addClass('gif');
            gifButton.attr('data-name', gifs[i]);
            gifButton.text(gifs[i]);
            $('#gifPlace').append(gifButton);
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
        
        
    // listens to the button in order to make a request to gify.
    $('button').on('click', function() {
        var gif = $(this).attr("data-name");
        var queryURL =
            'https://api.giphy.com/v1/gifs/search?q=' +
            gif +
            '&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=2';
        //ajax query    
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
                    var gifImage = $('<img>');
                    gifImage.attr("src", results[i].images.fixed_height_small.url)
                    gifDiv.append(p);
                    gifDiv.append(gifImage);
                    $('#gifLube').prepend(gifDiv);
                }
            }
        });
    });
});
    renderButtons();
    $('img').on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
});