const form = document.querySelector("#giphyForm");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const removeBtn = document.querySelector("#removeBtn");
const gifContainer = document.querySelector("#gifContainer");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchGif();
  searchInput.value = "";
});

removeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  $("img").remove();
});

async function searchGif() {
  try {
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchInput.value,
        api_key: "Jor2BgHmqkF1LhRMFJcQerUV5iRhyekv",
      },
    });
    const randomNumber = Math.floor(Math.random() * response.data.data.length);
    const gifUrl = response.data.data[randomNumber].images.original.url;
    const img = document.createElement("img");
    img.src = gifUrl;
    img.style.width = "300px";
    img.style.height = "250px";
    gifContainer.appendChild(img);
  } catch (error) {
    console.log(error);
    alert("Sorry, we couldn't find a match! Please try again!");
  }
}
