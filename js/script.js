import { keys } from "./keys.js";

const { HOST, PORT, USERNAME, PASSWORD } = keys;
const form = document.getElementById("contact_form");

var typed = new Typed(".auto-input", {
  strings: ["Алибек", "Фронтэндер", "UX Дизайнер"],
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
});

function sendEmail() {
  Email.send({
    Host: HOST,
    Port: PORT,
    Username: USERNAME,
    Password: PASSWORD,
    To: "alibek.mombekov@mail.ru",
    From: document.getElementById("email").value,
    Subject: "From homepage",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone number: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
