const share = document.getElementById("share");
const close = document.getElementById("close");
const activeShareBar = document.getElementById("active");
const pop = document.getElementById("popover");
const shareBar = document.getElementById("top-share-bar");
const white = document.getElementById("white");
var width = "";

function getWidth() {
  width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
}

share.addEventListener("click", function () {
  if (width <= 980) {
    activeShareBar.style.visibility = "visible";

    activeShareBar.style.transform = "translate(0, 0px)";
    activeShareBar.style.transition =
      "all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)";
  } else if (width > 980) {
    pop.classList.add("popover-big");
    white.style.visibility = "visible";
    share.style.visibility = "hidden";
  }
});

white.addEventListener("click", function () {
  share.style.visibility = "visible";
  white.style.visibility = "hidden";
  pop.classList.remove("popover-big");
});

close.addEventListener("click", function () {
  activeShareBar.style.visibility = "hidden";
  activeShareBar.style.transform = "translate(0, 100px)";
  activeShareBar.style.transition =
    "all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97)";
  // shareBar.style.opacity = "1";
});
