const decreaseBtn = document.getElementById("but1");
const resetBtn = document.getElementById(`but2`);
const increaseBtn = document.getElementById("but3");
const countlable = document.getElementById("num");
let count = 0;
decreaseBtn.onclick = function(){
    count--;
    countlable.textContent = count;
}  
increaseBtn.onclick = function(){
    count++;
    countlable.textContent = count;
}  
resetBtn.onclick = function(){
    count=0;
    countlable.textContent = count;
}  
