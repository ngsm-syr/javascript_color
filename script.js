// JavaScript

const color = document.getElementById('myColor');
console.log(color.value);

const text = document.getElementById('bodyText');

//背景色を変更する関数
function bgColor(){
  document.body.style.backgroundColor = color.value;
  text.textContent = color.value;
}

// カラーピッカーが変更されたときに、背景色を変える
color.addEventListener('input', bgColor);