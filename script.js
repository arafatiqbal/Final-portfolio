const form = document.querySelector("#form");

function sendMsg(e) {
  const name = document.querySelector("#name"),
    subject = document.querySelector("#subject"),
    email = document.querySelector("#email"),
    message = document.querySelector("#message");

  Email.send({
    SecureToken: "1844b681-b0c6-42e4-8d8d-c5d39430a725",
    To: "contact.arafatiq@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));
  console.log("inside");
}

form.addEventListener("submit", sendMsg);
