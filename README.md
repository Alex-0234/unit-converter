# 🔄 Unit Converter

A beginner level **unit converter** built using HTML, CSS, and JavaScript. This project supports multiple unit conversions and reinforces understanding of DOM manipulation, styling, and conditional logic using `case statement`.

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

## 📦 Changelog

### [v1.0] - 2025-07-24
- Initial release with length, weight, and mass conversions
- Created base HTML structure
- Added basic CSS styling and layout

### [v1.1] - 2025-07-25
- Improved design and layout with Flexbox
- Added input validation using `isNaN()`
- Added Google Fonts (Poppins) and hover effects
- Updated README with full documentation

- ### [v1.2] - 2025-07-25
- Added unit symbols in the result
- Replaced `if / else if` with `switch statements`

---

## 🧠 JavaScript Concepts Used

- `switch` conditional logic
- `parseFloat()` for number handling
- `isNaN()` for input validation
- DOM access via `querySelector()` and `getElementById()`
- Updating text content dynamically
- Using `onclick` to trigger functions

### Example logic:
```js
switch (inputOption) {
        case "mm to cm":
            output = inputValue / 10 + "cm";
        break;
         case "cm to mm":
            output = inputValue * 10 + "mm";
        break;
}



