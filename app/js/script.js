const connectMenu = document.querySelector("#connectnav");
const connectButton = document.querySelector("#connect");

connectButton.addEventListener("click", () => {
  if (connectMenu.style.display === "none") {
    connectMenu.style.display = "block";
  } else {
    connectMenu.style.display = "none";
  }
});
