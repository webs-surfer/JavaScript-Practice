function rollDice(){
    const numofrolls = document.getElementById("myinput").value;
    const dicetext = document.getElementById("dice_text");
    const diceimg = document.getElementById("dice_img");
    const values = [];
    const imgaes = [];
    for(let i=0; i < numofrolls; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        imgaes.push(`<img src= "images/${value}.png">`);
    }
    dicetext.textContent = `dice : ${values.join(',')}`;
    diceimg.innerHTML = imgaes.join('');
}