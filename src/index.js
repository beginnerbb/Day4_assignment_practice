// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

//console.log(window.innerWidth) : 1280

const body = document.querySelector("body");
let array = ["skyblue", "purple", "yellow"];

function forFunc(a) {
  if (body.classList.contains(a)) {
    body.classList.remove(a);
  }
}

function resizeFunc() {
  const width = window.innerWidth;
  if (width < 400) {
    body.classList.add("skyblue");
    array.splice(0, 1);
    for (var i = 0; i < 2; i++) {
      forFunc(array[i]);
    }
  } else if (400 <= width && width < 700) {
    body.classList.add("purple");
    array.splice(1, 1);
    for (var j = 0; j < 2; j++) {
      forFunc(array[j]);
    }
  } else if (700 <= width) {
    body.classList.add("yellow");
    array.splice(2);
    for (var k = 0; k < 2; k++) {
      forFunc(array[k]);
    }
  }
}

window.addEventListener("resize", resizeFunc);
