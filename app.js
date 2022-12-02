let colorChoice = "black";

document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
  let promptBtn = document.querySelector(".sizeBtn");
  promptBtn.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
  });

  console.log("hello");
});

function createBoard(size) {
  let squareArea = document.querySelector(".squareArea");
  squareArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  squareArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numberOfDivs = size * size;

  for (let i = 0; i < numberOfDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
    squareArea.insertAdjacentElement("beforeend", div);
  }
}

getSize = () => {
  let userChoice = prompt("Enter size");
  let message = document.querySelector("#message");
  if (userChoice === "") {
    message.innerHTML = "Please provide a number";
  } else if (userChoice < 0 || userChoice > 100) {
    message.innerHTML = "1-100";
  } else {
    message.innerHTML = "Thank you";
    return userChoice;
  }
};

const resetBtn = document.querySelector(".resetBtn");
const colorBtn = document.querySelector(".colorBtn");
resetBtn.addEventListener("click", () => {
  createBoard(16);
});

// colorDiv = () => {

// }

// selectColor = (color) => {
//     colorChoice = color;
// }

// colorBtn.addEventListener("click", () => {

// })