//Task One

const originalImg = document.getElementById("image");
const header = document.getElementById("header");

header.removeChild(originalImg);

originalImg.style.position = "absolute";
originalImg.style.top = "20px";
originalImg.style.right = "20px";
originalImg.style.width = "200px";
document.body.appendChild(originalImg);

const leftImg = originalImg.cloneNode(true);
leftImg.style.position = "absolute";
leftImg.style.top = "500px";
leftImg.style.left = "20px";
leftImg.style.width = "200px";
document.body.appendChild(leftImg);

const navigation = document.getElementById("navigation");
navigation.style.marginTop = "150px";
navigation.style.display = "inline-block";