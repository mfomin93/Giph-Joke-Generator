function init() {
    document.getElementById("jokeBtn").addEventListener("click", ev => {
      $("#jokeBtn").on("click", function() {
          ev.preventDefault();
          
          var queryURL = "https://joke3.p.rapidapi.com/v1/joke";
          url = url.concat(str);
          fetch(url)
         .then(response => response.json()
         .then(response => {
      var jokeContent = document.createElement('jokeContent');
      jokeContent.appendChild(div);
      var jokeOut = document.querySelector(".jokeOut");
      jokeOut.insertAdjacentElement('afterbegin', jokeContent);
      document.querySelector('#jokeBtn').value = '';       
         })
  
         .catch(err=>{
         }));
         });
        });
    }