const form = document.querySelector("form");
const btn = document.querySelector("button");
const email = document.querySelector("input");
const error = document.querySelector(".text");
const icon = document.querySelector(".error");
const rg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.onsubmit = () => {
  if (rg.test(email.value) == true) {
    icon.classList = "error";
    error.innerHTML = "";
  } else {
    icon.classList = "error active";
    email.style.cssText = "border:1px solid #F96464;";
    error.innerHTML = "Please provide a vaild email";
    return false;
  }
};
