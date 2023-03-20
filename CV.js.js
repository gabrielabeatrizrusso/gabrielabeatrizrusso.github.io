function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "40px";
  x.style.width = "40px";
}

function mouseOver(x) {
  document.getElementById ("zoom").style.scale = (1.15);
}

function mouseOut(x) {
  document.getElementById ("zoom").style.scale = (1);
}