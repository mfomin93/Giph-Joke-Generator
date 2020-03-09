function generateJoke(){
    $("#jokeBtn").on("click", function(ev) {
      ev.preventDefault();  
      var jokeURL = 'https://joke3.p.rapidapi.com/v1/joke';
      
      $.ajax({
        url: jokeURL,
    method: "GET",
    headers: {
    "x-rapidapi-host": "joke3.p.rapidapi.com",
    "x-rapidapi-key": "7633fefb42msh97b1ac4a8018328p11e565jsnb20273420f07"
      }})
     
        .then(function(response) {
          console.log(response);
       
          var imageUrl = response.content;
        
          var jokeText = $("<ul>");
       
          jokeText.prepend(imageUrl);
    
          $("#joke-el").prepend(jokeText);
        });
    });
  }
  
  generateJoke();