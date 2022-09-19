let displayEl = document.getElementById("displayDogs");

let button1 = document.getElementById("button_next");
let button2 = document.getElementById("button_clear");

function getRandom() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((images) => {
      let imageList = document.createElement("li");
      imageList.setAttribute("id", "imageList");
      let randomImage = document.createElement("img");
      randomImage.src = images.message;
      imageList.appendChild(randomImage);
      displayEl.insertBefore(imageList, displayEl.firstChild);
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
}

getRandom();
button1.addEventListener("click", function () {
  getRandom();
});

button2.addEventListener("click", function () {
  let displayEl = document.getElementById("displayDogs");
  if (displayEl.hasChildNodes()) {
    displayEl.removeChild(displayEl.firstChild);
  }
});
