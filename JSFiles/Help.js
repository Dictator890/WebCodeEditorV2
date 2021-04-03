var latesttitle = document.getElementById("latest-title");
var color = false;

setInterval(() => {
  color = !color;
  if (color) {
    latesttitle.classList.add("set-greeen-color");
  } else {
    latesttitle.classList.remove("set-greeen-color");
  }
}, 500);
