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
    imageAlt: "A penguin with it's wings out",
  },
  {
    imageName: "redPanda",
    imageSRC: "./images/redPanda.jpg",
    imageAlt: "Red panda on a tree",
  },
];

let imageIndex = 0;

function displayImage(index) {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  const firstImg = document.createElement("img");
  firstImg.src = imageData[index].imageSRC;
  firstImg.alt = imageData[index].imgAlt;
  firstImg.className = "fullscreen-image";
  fullscreenContainer.appendChild(firstImg);
}

function createThumbnails() {
  const thumbContainer = document.getElementById("thumbnail-container");
  imageData.forEach(function (image, index) {
    console.log(image);
    const img = document.createElement("img");
    img.className = "thumb-image";
    img.src = image.imageSRC;
    img.alt = image.imageAlt;
    thumbContainer.appendChild(img);

    img.addEventListener("click", function (event) {
      createFullscreenImages(event, index);
    });
  });
}

function createFullscreenImages(event, index) {
  console.log(event.target.alt);
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.innerHTML = null;
  const newImg = document.createElement("img");
  newImg.src = event.target.src;
  newImg.alt = event.target.alt;
  newImg.className = "fullscreen-image";
  fullscreenContainer.appendChild(newImg);
  imageIndex = index;
  console.log(imageIndex);
}

function arrowKeys(event) {
  if (event.key == "ArrowDown") {
    imageIndex++;
    if (imageIndex > imageData.length - 1) {
      imageIndex = 0;
    }
  }
  if (event.key == "ArrowUp") {
    imageIndex = imageIndex - 1;
    if (imageIndex < 0) {
      imageIndex = imageData.length - 1;
    }
  }
  displayImage(imageIndex);
}

document.addEventListener("keydown", arrowKeys);

displayImage(0);
createThumbnails();
