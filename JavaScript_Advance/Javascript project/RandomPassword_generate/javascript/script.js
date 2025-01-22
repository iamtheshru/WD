const PasswordBox = document.getElementById("Password");
const lenght = 12;

const upperCase = "ABCDFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdfghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function creatPassword() {
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)]
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    Password += number[Math.floor(Math.random() * number.length)]
    Password += symbol[Math.floor(Math.random() * symbol.length)]

    while (lenght > Password.length) {
        Password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    PasswordBox.value = Password

}

function copyPasswod() {
    PasswordBox.select();
    document.execCommand("copy");
}

