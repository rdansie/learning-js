let userName = prompt("What is your user name?");
console.log(userName);

if (userName == "Admin") {
    let password = prompt("What is your password?");
    if (password == "" || password == null) {
        alert("Cancelled");
    } else if (password == "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else if (userName == "" || userName == null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}