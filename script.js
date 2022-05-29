const form = document.getElementById("form");

function sendMsg(e) {
  const name = document.getElementById("name"),
    subject = document.getElementById("subject"),
    email = document.getElementById("email"),
    message = document.getElementById("message");

  Email.send({
    SecureToken: "1844b681-b0c6-42e4-8d8d-c5d39430a725",
    To: "contact.arafatiq@gmail.com",
    From: email.value,
    Subject: subject,
    Body: message,
  }).then((message) => alert(message));
}

form.addEventListener("submit", sendMsg);
