const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => chooseAction(button));
});

function chooseAction(button) {
  const value = button.getAttribute("data-value");

  if (value === "clear") {
    display.value = "";
  } else if (value === "=") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  } else {
    display.value += value;
  }
  console.log(display.value);
}
