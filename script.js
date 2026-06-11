const password = document.getElementById("password");
const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase="abcdefghijklmnopqrstuvwxyz";
const Numbers="0123456789";
const Symbols="!@#$%^&*()_+[]{}|;:,.<>?";
let length = 12;
var createPassword = ()=>{
    password.value+= UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password.value+= LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password.value+= Numbers[Math.floor(Math.random() * Numbers.length)];
    password.value+= Symbols[Math.floor(Math.random() * Symbols.length)];
    allChars= UpperCase + LowerCase + Numbers + Symbols;
    for(let i =4; i < length; i++){
        password.value+= allChars[Math.floor(Math.random() * allChars.length)];
        console.log(password.value.length);
}
}
function copy(){
    password.select();
    confirm("Password copied to clipboard")?
    document.execCommand("copy"):false;
    password.value = "";
}