const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function handleInput(event) {
  const inputValue = event.currentTarget.value.trim();
  output.textContent = inputValue === "" ? "Anonymous" : inputValue;
}
textInput.addEventListener("input", handleInput);