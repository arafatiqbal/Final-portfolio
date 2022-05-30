const name = document.querySelector("#name"),
  subject = document.querySelector("#subject"),
  email = document.querySelector("#email"),
  message = document.querySelector("#message");

function sendEmail() {
  Email.send({
    SecureToken: "bcd89087-d6ec-4cd0-bbc2-364b02e2de77",
    To: "contact.arafatiq@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));

  console.log("Here is the info", subject.value, email.value, message.value);
}
