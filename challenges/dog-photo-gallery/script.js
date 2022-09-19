let button1 = document.createElement("button");
let button2 = document.createElement("button");
button1.innerText = "Random Dog";
button2.innerText = "Error";

let body = document.querySelector("body").appendChild(button1);
body = document.querySelector("body").appendChild(button2);

button1.addEventListener("click", function () {
  

  //Retrieve the JSON
  fetch("https://dog.ceo/api/breeds/image/random")
    // Get the response and extract the JSON
    .then(function (response) {
      return response.json();
    })
    // Do something with the JSON
    .then((images) => {
      //   console.log(images);
      let imageUl = document.createElement("ul");
      let imageList = document.createElement("li");
      let imageUrl = document.createElement("url");
      imageUl.appendChild(imageList);
      body.appendChild(imageUl);
      let randomImage = document.createElement("img");
      imageUrl.appendChild(randomImage);
      randomImage.src = images.message;
      imageList.appendChild(randomImage);
    })
    // If something goes wrong
    .catch((error) => console.log(error));
});
