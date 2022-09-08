const navContainer = document.getElementById("navContainer");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeMenu = document.getElementById("navLinks");

openBtn.onclick = function openBtn() {
  navContainer.style.right = " 0";
  console.log("clicked");
};

closeBtn.onclick = function closeBtn() {
  navContainer.style.right = "-200px";
  console.log("clicked");
};

closeMenu.onclick = function closeBtn() {
  navContainer.style.right = "-200px";
  console.log("clicked");
};
