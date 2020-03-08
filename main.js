
var APIKEY = "o58fMMxvAkc7hySu0MF9E1duUL47viNk";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("go").addEventListener("click", ev => {

    //This here below stops the page reload
    ev.preventDefault();
    var url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1&tag=`;
    var str = document.getElementById("search").value.trim();
    url = url.concat(str);
    fetch(url)
    .then(response => response.json() )
    //response is then passed down into content down here
    .then(content => {
        
      var giph = document.createElement('giph');
      var img = document.createElement('img');
      var giphName = document.createElement('giphName');
      img.src = content.data.images.downsized.url;
      img.alt = content.data.title;
      giphName.textContent = content.data.title;
      giph.appendChild(img);
      giph.appendChild(giphName);
      var out = document.querySelector('.out');
      //This here below is done so the newest image is placed at the top so the user doesn't have to scroll to the bottom. So you're adding this figure into the div with class=out
      out.insertAdjacentElement('afterbegin', giph);
      document.querySelector('#search').value = '';
    })

    .catch(err=>{

    });
  });
}
