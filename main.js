//TODO: Create thumnbnail images, so the user can click on them and see them in a fullscreen format
console.log("Hello, World");

const imageData = [
  {
    imageName: "belugaWhale",
    imageSRC: "./images/bWhale.jpg",
    imageAlt: "a beluga whale looking above water",
    imageSrcSet: "images/bWhale.jpg 800w, images/penguin_small.jpg 480w",
    imageSizes: "(max-width: 600px) 480px, 800px",
  },
  {
    imageName: "penguin",
    imageSRC: "./images/penguin.jpg",
    imageAlt: "A penguin with it's wings out",
    imageSrcSet: "./images/penguin.jpg 800w, ./images/penguin_small.jpg 480w",
    imageSizes: "(max-width: 600px) 480px, 800px",
  },
  {
    imageName: "redPanda",
    imageSRC: "./images/redPanda.jpg",
    imageAlt: "Red panda on a tree",
  },
];

function displayFirstImage() {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  const firstImg = document.createElement("img");
  firstImg.src = imageData[0].imageSRC;
  firstImg.alt = imageData[0].imageAlt;
  firstImg.className = "fullscreen-image";
  fullscreenContainer.appendChild(firstImg);
}

function createThumbnails() {
  const thumbContainer = document.getElementById("thumbnail-container");
  imageData.forEach(function (image) {
    console.log(image);
    const img = document.createElement("img");
    img.className = "thumb-image";
    img.src = image.imageSRC;
    img.alt = image.imageAlt;
    img.srcset = image.imageSrcSet;
    img.sizes = image.imageSizes;
    thumbContainer.appendChild(img);

    img.addEventListener("click", createFullscreenImages);
  });
}

function createFullscreenImages(event) {
  console.log(event.target.alt);
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.innerHTML = "";
  const newImg = document.createElement("img");
  newImg.src = event.target.src;
  newImg.alt = event.target.alt;
  newImg.srcset = event.target.srcset;
  newImg.sizes = event.target.imageSizes;
  newImg.className = "fullscreen-image";
  fullscreenContainer.appendChild(newImg);
}

//displayFirstImage();
createThumbnails();
