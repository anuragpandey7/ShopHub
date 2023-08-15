let signUpLS = JSON.parse(localStorage.getItem("signUp")) || [];
let signInLS = JSON.parse(localStorage.getItem("signIn")) || [];
let form = document.getElementById("form");

form.addEventListener("submit", function (ele) {
  ele.preventDefault();

  let signinObj = {
    email: form.email.value,
    pass: form.password.value,
  };

  signInLS.push(signinObj);

  let flag = false;
  signUpLS.forEach((elem) => {
    if (elem.email == signinObj.email && elem.pass == signinObj.pass) {
      flag = true;
      localStorage.setItem("signIn", JSON.stringify(signInLS));
      setTimeout(function () {
        alert("You are succesfully logged in!");
        window.location.href = "index.html";
      }, 3000);
    }
  });

  if (flag == false) {
    alert("Please Enter correct Data!");
  }
});
