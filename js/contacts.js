import { keys } from "./keys.js";

function sendEmail() {
  Email.send({
    SecureToken: keys.TOKEN,
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
