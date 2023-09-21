document.getElementById("login-btn").addEventListener("click", function () {
  const UserEmailAddress = document.getElementById("email-address");
  const email = UserEmailAddress.value;
  const UserPassword = document.getElementById("pass-word");
  const password = UserPassword.value;

  if (email === "sumiya@gmail.com" && password === "1224") {
    window.location.href = "transaction.html";
  } else {
    const invalidUser = document.getElementById("invalid-user");
    const p = document.createElement("p");
    p.innerText = "Invalid User";
    p.setAttribute("class", `text-red-700 text-sm mt-2`);
    invalidUser.appendChild(p);
  }
});
