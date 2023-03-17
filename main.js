const key = document.querySelector(".key");
const code = document.querySelector(".code");
const which = document.querySelector(".which");
const historyBlock = document.querySelector(".historyBlock");
const headerCode = document.querySelector(".header__code");
const headerWhich = document.querySelector(".header__which");
let array = [];


window.addEventListener("keyup", (event) => {
  array.forEach((el) => {
    if (event.key.toUpperCase() === el) {
      const pressedKey = array.indexOf(el);
      historyBlock.removeChild(historyBlock.childNodes[pressedKey]);
      const spliceArray = array.splice(pressedKey, 1);
    }
  });

  key.innerHTML = event.key;
  code.innerHTML = event.code;
  which.innerHTML = event.which;

  addLetterHistory();

  headerCode.innerHTML = event.which;
  headerWhich.innerHTML = event.which;
});

function addLetterHistory() {

  let current = event.key.toUpperCase();
  array.unshift(current);
  let li = document.createElement("li");
  li.innerHTML = array[0];
  historyBlock.insertAdjacentElement("afterbegin", li);

  if (array.length > 4) {
    array = array.slice(0, 4);
    historyBlock.lastElementChild.remove();
  }

  let clickedElement = event;
  li.addEventListener("click", () => {
    key.innerHTML = clickedElement.key;
    code.innerHTML = clickedElement.code;
    which.innerHTML = clickedElement.which;
    headerCode.innerHTML = clickedElement.which;
    headerWhich.innerHTML = clickedElement.which;
  });
}
