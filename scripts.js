const share = document.getElementById("share");
const close = document.getElementById("close");
const activeShareBar = document.getElementById("active");

var width = window.innerWidth;

share.addEventListener("click", function () {
  // console.log(width);
  if (width > 900) {
    activeShareBar.classList.add("popover");
    activeShareBar.classList.remove("hidden");
    activeShareBar.classList.remove("share-bar-active");
    close.classList.add("hidden");
  } else {
    activeShareBar.classList.remove("hidden");
  }
});

close.addEventListener("click", function () {
  activeShareBar.classList.add("hidden");
});
