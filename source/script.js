const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "0";
    } else if (item.id == "delete") {
      let string = display.innerText.toString();
      if (display.innerText == "0") {
        //do nothing
      } else {
        if (display.innerText.length == 1) {
          display.innerText = "0";
        } else {
          display.innerText = string.substr(0, string.length - 1);
        }
      }
    } else if (
      display.innerText == "0" &&
      (item.id == "0" ||
        item.id == "1" ||
        item.id == "2" ||
        item.id == "3" ||
        item.id == "4" ||
        item.id == "5" ||
        item.id == "6" ||
        item.id == "7" ||
        item.id == "8" ||
        item.id == "9")
    ) {
      display.innerText = item.id;
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += item.id;
    }
  };
});

document.addEventListener("keydown", (KeyboardEvent) => {
  if (KeyboardEvent.key == "1") {
    display.innerText += "1";
  } else if (KeyboardEvent.key == "2") {
    display.innerText += "2";
  } else if (KeyboardEvent.key == "3") {
    display.innerText += "3";
  } else if (KeyboardEvent.key == "4") {
    display.innerText += "4";
  } else if (KeyboardEvent.key == "5") {
    display.innerText += "5";
  } else if (KeyboardEvent.key == "6") {
    display.innerText += "6";
  } else if (KeyboardEvent.key == "7") {
    display.innerText += "7";
  } else if (KeyboardEvent.key == "8") {
    display.innerText += "8";
  } else if (KeyboardEvent.key == "9") {
    display.innerText += "9";
  } else if (KeyboardEvent.key == "0") {
    display.innerText += "0";
  } else if (KeyboardEvent.key == "+") {
    display.innerText += "+";
  } else if (KeyboardEvent.key == "-") {
    display.innerText += "-";
  } else if (KeyboardEvent.key == "/") {
    display.innerText += "/";
  } else if (KeyboardEvent.key == "%") {
    display.innerText += "%";
  } else if (KeyboardEvent.key == "*") {
    display.innerText += "*";
  } else if (KeyboardEvent.key == ".") {
    display.innerText += ".";
  } else if (KeyboardEvent.key == "Backspace") {
    let string = display.innerText.toString();
    if (display.innerText == "0") {
      //do nothing
    } else {
      if (display.innerText.length == 1) {
        display.innerText = "0";
      } else {
        display.innerText = string.substr(0, string.length - 1);
      }
    }
  } else if (KeyboardEvent.key == "=") {
    display.innerText = eval(display.innerText);
  }
});
