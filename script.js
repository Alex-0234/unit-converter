    const inputOption1Element = document.querySelector(".selectOption1");
    const inputOption2Element = document.querySelector(".selectOption2");
    const inputValueElement = document.querySelector(".inputValue");
    const resultElement = document.getElementById("result");

function convert() {
    const inputOption1 =  inputOption1Element.value;
    const inputOption2 =  inputOption2Element.value;
    const inputOption = inputOption1 + " to " + inputOption2;
    let inputValue = parseFloat(inputValueElement.value)

            if (isNaN(inputValue) ) {
            resultElement.textContent = "Please enter a valid number.";
            return;
            }

    switch (inputOption) {
        //Length
        case "mm to cm":
            output = inputValue / 10 + "cm";
        break;
        case "cm to m":
            output = inputValue / 100 + "m";
        break;
        case "mm to m":
            output = inputValue / 1000 + "m";
        break;
        case "cm to mm":
            output = inputValue * 10 + "mm";
        break;
        case "m to mm":
            output = inputValue * 1000 + "mm";
        break;
        case "m to cm":
            output = inputValue / 100 + "cm";
        break;

        //Weight
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
        
        // Temperature
        case "Celsius to Fahrenheit":
            output = (inputValue * 9/5) + 32 + "°F";
        break;
        case "Fahrenheit to Celsius":
            output = (inputValue - 32) * 5/9 + "°C";
        break;
        case "Celsius to Kelvin":
            output = inputValue + 273.15 + "K";
        break;
        case "Kelvin to Celsius":
            output = inputValue - 273.15 + "°C";
        break;
        case "Fahrenheit to Kelvin":
            output = (inputValue - 32) * 5/9 + 273.15 + "K";
        break;
        case "Kelvin to Fahrenheit":
            output = (inputValue - 273.15) * 9/5 + 32 + "°F";
        break;
    }

        if (!output) {
            resultElement.textContent = "Please enter a valid conversion.";
            return;
        }
    resultElement.textContent = "Result: " + output;
}
