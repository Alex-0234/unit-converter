function convert() {
    let output = null
    let inputOption = document.querySelector(".selectOption").value;
    let inputValue = document.querySelector(".inputValue").value;
    if (inputOption === "cm to mm"){
        output = inputValue * 10;
    }
    else if (inputOption === "pounds to kg") {
       output = inputValue * 0.453592;
    }
    else if (inputOption === "kg to pounds"){
        output = inputValue * 2.20462;
    }
    else if (inputOption === "mm to cm"){
        output = inputValue / 10;
    }
    else if (inputOption === "g to kg"){
        output = inputValue / 1000;
    }
    else if (inputOption === "kg to g"){
        output = inputValue * 1000;
    }
    document.getElementById("result").textContent = "Result: " + output;
    output = null;
    
    inputValue = parseFloat(inputValue);

if (isNaN(inputValue)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
}
}