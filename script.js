const name = document.querySelector("#name"),
  subject = document.querySelector("#subject"),
  email = document.querySelector("#email"),
  message = document.querySelector("#message");

function sendEmail() {
  Email.send({
    SecureToken: "b7fd0fab-2a64-446d-97c5-6be0a83fee20",
    To: "contact.arafatiq@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));

  console.log("Here is the info", subject.value, email.value, message.value);
}
