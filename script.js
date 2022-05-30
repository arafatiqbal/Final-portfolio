const name = document.querySelector("#name"),
  subject = document.querySelector("#subject"),
  email = document.querySelector("#email"),
  message = document.querySelector("#message");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "arafatiqbal123@gmail.com",
    Password: "D77D93E091EE432EABB3195A4E56491F7927",
    To: "arafatiqbal123@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));

  console.log("Here is the info", subject.value, email.value, message.value);
}
