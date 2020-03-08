var APIKEY = "o58fMMxvAkc7hySu0MF9E1duUL47viNk";
function init() {
    $("#generate").on("click", function (ev) {
      //event listener^
        ev.preventDefault();
        //doesn't reload page when click
        var userSearch = $("#search").val();
//gets value from search bar
        var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1&tag=${userSearch}`;
        //api call
        // `` is template literal, es6 way of doing this:
        //   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key="+APIKEY+"&limit=1&tag="+userSearch;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        //ajax call
        .then((content) => {
          //part of ajax .then gets the api and content is basically the content from api
          // => es6 version of writing es5 which is .then((content) => {
         // })
            var giph = document.createElement('giph');
            var img = document.createElement('img');
            // var giphName = document.createElement('giphName');
            // var br = document.createElement("<br>");
            img.src = content.data.images.downsized.url;
            // img.alt = content.data.title;
            // giphName.textContent = content.data.title;
            giph.appendChild(img);
            // giph.appendChild(br);
            // giph.appendChild(giphName);
            var out = document.querySelector('.out');
            //This here below is done so the newest image is placed at the top so the user doesn't have to scroll to the bottom. So you're adding this figure into the div with class=out
            out.insertAdjacentElement('afterbegin', giph);
            $('#search').val('');
            //clears search bar after typing
        });
    });
}
// Mark's API
function generateJoke() {
  $("#jokeBtn").on("click", function (ev) {
ev.preventDefault();
var jokeURL = 'https://joke3.p.rapidapi.com/v1/joke'
$.ajax({
  url: jokeURL,
  method: "GET",
  headers: {
"x-rapidapi-host": "joke3.p.rapidapi.com",
"x-rapidapi-key": "7633fefb42msh97b1ac4a8018328p11e565jsnb20273420f07"
}
})
//ajax call
.then((content) => {
var jokeEl = document.createElement('jokeEl');
var jokeText = "";
jokeEl.append(jokeText);
var jokeOutEl = document.querySelector('.jokeOut');
jokeOutEl.insertAdjacentElement('afterbegin', jokeEl);
});
  });
}
// Mark's API
//instead of document load
    generateJoke();
    init();