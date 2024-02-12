const inputPassword = document.getElementById("input-pass");
const totalChar = document.getElementById("char-input");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("number");
const symbols = document.getElementById("symbol");
const button = document.getElementById("btn");
const copyBtn = document.getElementById("copy_btn");

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = ",./;[]-=<>?:{}|)(*&^%$#@!+_";

function generatePassword() {
  let password = "";
  let allChars = "";

  allChars += lowerCase.checked ? lowerSet : "";
  allChars += upperCase.checked ? upperSet : "";
  allChars += numbers.checked ? numberSet : "";
  allChars += symbols.checked ? symbolSet : "";

  if (allChars.length == 0) {
    alert("Please select atleast one character");
    return password;
  }
  for (let i = 1; i <= totalChar.value; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputPassword.value = password;
}

button.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(inputPassword.value);
  copyBtn.title = "password copied";
  copyBtn.innerText = "check";
  setTimeout(()=> {
    copyBtn.title = "";
    copyBtn.innerText = "content_copy";
  }, 2000)
})
