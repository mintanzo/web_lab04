function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateElementColor() {
  var element = document.getElementById("element");
  element.style.background = getRandomColor();
  element.style.color = getRandomColor();
}

function updateSelectedElementColor() {
  var element = document.querySelector("li.selected");
  element.style.background = getRandomColor();
  element.style.color = getRandomColor();
}

function deleteImage() {
  var element = document.getElementById("image");
  element.style.display = "none";
}

function addImage() {
  var element = document.getElementById("image");
  element.style.display = "block";
}

function increaseImageSize() {
  var element = document.getElementById("image");
  element.style.width = "10%";
}

function decreaseImageSize() {
  var element = document.getElementById("image");
  element.style.width = "40%";
}
