var typed = new Typed(".auto-input", {
  strings: ["Алибек", "Фронтэндер", "UX Дизайнер"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
});

var checkbox = document.querySelector("input[name=mode]");

checkbox.addEventListener("change", function () {
  if (!this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
