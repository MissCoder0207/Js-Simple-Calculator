let a = document.getElementById("a");
let b = document.getElementById("b");
let operation = document.getElementById("operation");
let result = document.getElementById("result");


function calculate() {
    let number = parseInt(a.value);
    let number1 = parseInt(b.value);

    let ans;
    if (operation.value === "+")
        ans = number1 + number;
    else if (operation.value === "-")
        ans = number - number1;
    else
        ans = number1 * number;

    result.innerText = "result: " + (ans).toString();
}


