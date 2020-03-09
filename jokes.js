// Mark's API

    // Event listener for our Joke button
    $("#jokeBtn").on("click", function() {
        // Storing our giphy API URL for a random cat image
        var jokeURL = 'https://joke3.p.rapidapi.com/v1/joke'
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
          url: jokeURL,
    method: "GET",
    headers: {
  "x-rapidapi-host": "joke3.p.rapidapi.com",
  "x-rapidapi-key": "7633fefb42msh97b1ac4a8018328p11e565jsnb20273420f07"
        }})
        // After the data from the AJAX request comes back
          .then(function(response) {
            console.log(response);
          // Saving the image_original_url property
            var imageUrl = response.content;
            // Creating and storing a p tag to store the joke text
            var jokeText = $("<p>");
            // Setting the jokeText src attribute to imageUrl
            jokeText.prepend(imageUrl);
           
            // Prepending the jokeText to the images div
            $("#joke-el").prepend(jokeText);
          });
      });
  
  // Mark's API