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
      } else{
        display.innerText = string.substr(0, string.length - 1);
      }
    } else if (display.innerText == "0" && (item.id == "1"||item.id == "2"||item.id == "3"||item.id == "4"||item.id == "5"||item.id == "6"||item.id == "7"||item.id == "8"||item.id == "9")) {
        display.innerText = item.id;
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += item.id;
    }
  };
});
