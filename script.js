const btn = document.querySelector("contact-button");

const name = document.querySelector("#name"),
  subject = document.querySelector("#subject"),
  email = document.querySelector("#email"),
  message = document.querySelector("#message");

btn.addEventListener("click", () => {
  Email.send({
    Host: "smtp.yourisp.com",
    Username: "arafatiqbal123@gmail.com",
    Password: "D15B7BE4FABEE006875879B679D7E15DCC8D",
    To: "contact.arafatiq@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));

  console.log("Here is the info", subject.value, email.value, message.value);
});
