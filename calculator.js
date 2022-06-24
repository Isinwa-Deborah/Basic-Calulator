const operator = prompt("Please enter the operator you want to perform: such as +, -, *, /");
const num1 = parseFloat(prompt("Enter your first number"));
const num2 = parseFloat(prompt("Enter your second number"));


if (operator == "+") {
    alert(num1 + num2);
}

else if (operator == "-") {
    alert(num1 - num2);
}

else if (operator == "*") {
    alert(num1 * num2);
}

else if (operator == "/") {
    alert(num1 / num2);
}

else{
    alert("Please fill the fields according to prescribed specification");
}





