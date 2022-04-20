const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

let count = 0;

//ddddddddㅇㅇ
const updateText = () => {
  number.innerText = count;
  console.log(count);
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};
const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
