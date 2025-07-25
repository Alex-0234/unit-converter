# 🔄 Unit Converter

A beginner level **unit converter** built using HTML, CSS, and JavaScript. This project supports multiple unit conversions and reinforces understanding of DOM manipulation, styling, and conditional logic using `if / else if`.

## 🚀 Features

- Clean, dark-themed user interface
- Responsive layout using Flexbox
- Font styling with Google Fonts (Poppins)
- Interactive unit conversion via JavaScript
- Input validation for incorrect values
- Hover effects for better UI feedback
- Conversion types:
  - cm ↔ mm
  - mm ↔ cm
  - pounds ↔ kg
  - kg ↔ pounds
  - g ↔ kg
  - kg ↔ g

---

## 🧠 JavaScript Concepts Used

- `if / else if / else` conditional logic
- `parseFloat()` for number handling
- `isNaN()` for input validation
- DOM access via `querySelector()` and `getElementById()`
- Updating text content dynamically
- Using `onclick` to trigger functions

### Example logic:
```js
if (inputOption === "cm to mm") {
    output = inputValue * 10;
} else if (inputOption === "g to kg") {
    output = inputValue / 1000;
} else {
    result.textContent = "Please enter a valid number.";
}

## 📦 Changelog

### [v1.0] - 2025-07-20
- Initial release with length, weight, and mass conversions
- Created base HTML structure
- Added basic CSS styling and layout

### [v1.1] - 2025-07-25
- Improved design and layout with Flexbox
- Added input validation using `isNaN()`
- Added Google Fonts (Poppins) and hover effects
- Updated README with full documentation
