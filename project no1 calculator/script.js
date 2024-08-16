const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Handle button clicks
// 

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText && item.id === "equal") {
      let expression = display.textContent;

      expression = expression.replace(/(\d)(\()/g, '$1*(');
      expression = expression.replace(/(\))(\d)/g, ')*$2');

      display.innerText = eval(expression);

    } else if (!display.innerText && item.id === "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});


// Handle theme toggle
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};
