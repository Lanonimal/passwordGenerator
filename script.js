const empty = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#%^&*_+|";

const uppercase = document.getElementById("p-uppercase");
const lowercase = document.getElementById("p-lowercase");
const number = document.getElementById("p-number");
const symbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");
const pLength = document.getElementById("sliderValue")
let initialPassword = empty // ""

//function that generates a random password
const generatePassword = (l, initialPassword) => { //l is length selected by user, initialPassword is list of characters we're going to use
    let pass="";
    if(uppercase.checked || lowercase.checked || number.checked || symbol.checked){ //user must have at least one option checked, or else the password we generate will be empty.
        for (let i = 0; i < l; i++){
            pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length)); //charAt returns item from array at given index. 
        }
        return pass;
    } else {
        alert("Please select at least one type of character for your password.")
    }
}

submit.addEventListener("click", () => {
    // ternary operator: condition ? block of code : do something else
    uppercase.checked ? (initialPassword += upperCase) : ""; //if uppercase.checked returns true, we add upperCase to the list of characters that our generate function can use.
    lowercase.checked ? (initialPassword += lowerCase) : "";
    number.checked ? (initialPassword += numbers) : "";
    symbol.checked ? (initialPassword += symbols) : "";
    password.value = generatePassword(pLength.innerHTML, initialPassword);
})

copy.addEventListener("click", () => {
    if (password.value == ""){
        alert("Please generate a password.");
    } else {
        password.select(); //select the text inside our input box
        document.execCommand("copy"); //copy, cut, paste
        alert("Password succesfully copied to clipboard");
    }
})

//logic for slider
const slider = document.getElementById("myRange");
const sliderOutput = document.getElementById("sliderValue");
sliderOutput.innerHTML = slider.value; //display the default slider value
slider.oninput = function() {
    sliderOutput.innerHTML = this.value; //set the current value of the slider //() => not possible here because it cant use this.value?
};



