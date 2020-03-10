var APIKEY = "o58fMMxvAkc7hySu0MF9E1duUL47viNk";

function init() {
  $("#go").on("click", function (ev) {
    ev.preventDefault();
    var userSearch = $("#search").val();
    var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1&tag=${userSearch}`;

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then((content) => {
        var giph = document.createElement('giph');
        var img = document.createElement('img');
        img.src = content.data.images.downsized.url;
        giph.appendChild(img);
        var out = document.querySelector('.out');
        out.insertAdjacentElement('afterbegin', giph);
        $('#search').val('');
      })
  })
};

init();