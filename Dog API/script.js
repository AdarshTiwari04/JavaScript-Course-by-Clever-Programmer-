const image = document.getElementById("image-box");
const button = document.getElementById("Dog-button");

button.onclick = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      image.innerHTML = `<img src="${json.message}" alt="" height=600px width=600px />`;
    });
};
