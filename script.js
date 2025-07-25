function convert() {
    let output = null
    let inputOption = document.querySelector(".selectOption").value;
    let inputValue = parseFloat(document.querySelector(".inputValue").value);

    switch (inputOption) {
        case "mm to cm":
            output = inputValue / 10 + "cm";
        break;
         case "cm to mm":
            output = inputValue * 10 + "mm";
        break;
         case "pounds to kg":
            output = inputValue * 0.453592 + "kg";
        break;
         case "kg to pounds":
            output = inputValue * 2.20462 + "pounds";
        break;
         case "g to kg":
            output = inputValue / 1000 + "kg";
        break;
         case "kg to g":
            output = inputValue * 1000 + "g";
        break;

    }
     document.getElementById("result").textContent = "Result: " + output;
    output = null;  

if (isNaN(inputValue)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
}

}
