registerBtn = document.querySelector("#register");
nameUpField = document.querySelector("#registerName");
mailUpField = document.querySelector("#registerEmail");
passUpField = document.querySelector("#registerPassword");

registerBtn.addEventListener("click", () => {
  fetch("https://weather-back-theta.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameUpField.value,
      email: mailUpField.value,
      password: passUpField.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});

connectBtn = document.querySelector("#connection");
mailInField = document.querySelector("#connectionEmail");
passInField = document.querySelector("#connectionPassword");

connectBtn.addEventListener("click", () => {
  console.log(mailInField.value, passInField.value);
  fetch("https://weather-back-theta.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: mailInField.value,
      password: passInField.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        window.location.assign("index.html");
      }
    });
});
