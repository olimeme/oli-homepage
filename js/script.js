var typed = new Typed(".auto-input", {
  strings: ["Sample text"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
});

var cursor = document.getElementById("cursor");
document.onmousemove = function (e) {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.style.display = "block";
};
