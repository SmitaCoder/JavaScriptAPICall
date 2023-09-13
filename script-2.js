fetch(
  "https://api.giphy.com/v1/gifs/random?api_key=OhGj1uGIvs6kec8efUMvRusTdlnBZoBY&tag=sea+otter&rating=g"
)
  .then(function (response) {
    if (response.status == 200) {
      return response.json();
    } else {
      console.log("Whoops Problem!!");
    }
  })
  .then(function (jsonData) {
    console.log(jsonData);
    var gifUrl = jsonData.data.images.originals.url;
    console.log(gifUrl);

    var gifImg = document.createElement("img");
    gifImg.setAttribute("src", gifUrl);
    document.body.appendChild(gifImg);

    var gifTitle = jsonData.data.title;
    console.log(gifTitle);
    var title = document.createElement("h3");
    title.innerHTML = gifTitle;
    document.body.appendChild(title);
  })
  .catch(function (error) {
    console.log("There was a problem... ", error);
  });
