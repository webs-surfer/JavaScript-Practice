function passwordGen (passwordlen,includeLowerCase,includeUpperCase,includeSymbols,includeNumber){
    const LowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const UpperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChar = "0123456789";
    const symbolChar = "!@#$%&*";
    let allowedchar = "";
    let Password = "";
    allowedchar += includeLowerCase ? LowerCaseChar : "";
    allowedchar += includeUpperCase ? UpperCaseChar : "";
    allowedchar += includeSymbols ? numberChar : "";
    allowedchar += includeSymbols ? symbolChar : "";
    if (passwordlen <= 0){
        return `(Atleast 1 length of password is required)`;
    }
    if (allowedchar.length === ""){
        return `atleast allow one of diffrent criteria`;
    }
    for(let i =0; i < passwordlen; i++){
        const randomindex = Math.floor(Math.random() * allowedchar.length);
        Password += allowedchar[randomindex];
    }
    return Password;
}
const passwordlen = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeSymbols= true;
const includeNumber = true;

const password = passwordGen(passwordlen,includeLowerCase,includeUpperCase,includeSymbols,includeNumber);
const pass = document.getElementById("mytext");
pass.textContent = password;