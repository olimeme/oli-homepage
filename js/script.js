var typed = new Typed(".auto-input", {
  strings: ["Alibek", "Frontend Dev", "UX Designer"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
});

const checkbox = document.querySelector("input[name=mode]");
const link = document.querySelector("link[rel='icon']");
const navItem = document.querySelectorAll("#nav_item");
const navBtn = document.querySelector("#click");

checkbox.addEventListener("change", function () {
  if (!this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
    link.href = "favicon_light/favicon-32x32.png";
    console.log(link);
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
    link.href = "favicon/favicon-32x32.png";
  }
});

navItem.forEach((item) => {
  item.addEventListener("click", function () {
    navBtn.checked = !navBtn.checked;
  });
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
