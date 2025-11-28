//TODO: Create thumnbnail images, so the user can click on them and see them in a fullscreen format
console.log("Hello, World");

const imageData = [
  {
    imageName: "belugaWhale",
    imageSRC: "./images/bWhale.jpg",
    imageAlt: "a beluga whale looking above water",
  },
  {
    imageName: "penguin",
    imageSRC: "./images/penguin.jpg",
    imageAlt: "A penguin",
  },
  {
    imageName: "redPanda",
    imageSRC: "./images/redPanda.jpg",
    imageAlt: "Red panda on a tree",
  },
];

function createThumbnails() {
  const thumbContainer = document.getElementById("thumbnail-container");
  imageData.forEach(function (image) {
    console.log(image);
    const img = document.createElement("img");
    img.className = "thumb-image";
    img.src = image.imageSRC;
    img.alt = image.imageAlt;
    thumbContainer.appendChild(img);

    img.addEventListener("click", createFullscreenImages);
  });
}

function createFullscreenImages(event) {
  console.log(event.target.alt);
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.innerHTML = null;
  const newImg = document.createElement("img");
  newImg.src = event.target.src;
  newImg.alt = event.target.alt;
  newImg.className = "fullscreen-image";
  fullscreenContainer.appendChild(newImg);
}

createThumbnails();
