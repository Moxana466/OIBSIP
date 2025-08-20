let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = " ";
}

function deleteChar() {
  display.value = display.value.slice(1, 1);
}

function calculate() {
  try {
    display.value = eval(display.value); // evaluates math expression
  } catch (error) {
    display.value = "Error";
  }
}
