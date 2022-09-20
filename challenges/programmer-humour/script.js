function getFunnyImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `Encountered something unexpected: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((jsonResponse) => {
      // do whatever you want with the JSON response
      let body = document.querySelector("body");
      let imageEl = document.createElement("img");
      console.log(jsonResponse);
      imageEl.src = jsonResponse.img;
      body.appendChild(imageEl);
    })
    .catch((error) => {
      // Handle the error
      console.log(error);
    });
}

getFunnyImage();
