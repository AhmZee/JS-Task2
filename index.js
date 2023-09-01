
function saveInput() {
  const inputElement = document.querySelector(".input-box");
  const inputText = inputElement.value;

  document.querySelector(".display-text").innerHTML = inputElement.value;
  inputElement.value = "";
}
