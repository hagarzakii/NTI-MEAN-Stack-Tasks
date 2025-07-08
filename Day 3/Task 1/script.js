//Task One

// Get DOM elements
const originalImg = document.getElementById("image");
const header = document.getElementById("header");

header.removeChild(originalImg);

Object.assign(originalImg.style, {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "200px"
});
document.body.appendChild(originalImg);

const leftImg = originalImg.cloneNode(true);
Object.assign(leftImg.style, {
    position: "absolute",
    top: "500px",
    left: "20px",
    width: "200px"
});
document.body.appendChild(leftImg);

const navigation = document.getElementById("navigation");
Object.assign(navigation.style, {
    marginTop: "150px",
    display: "inline-block"
});