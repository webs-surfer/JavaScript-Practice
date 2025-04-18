const MyButton = document.getElementById("mybut");
const MyLabel = document.getElementById("randnum");
const min = 1;
const max = 6;
let randomnum;
MyButton.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    MyLabel.textContent = randomnum;
}