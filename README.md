# 🔄 Unit Converter

A beginner level **unit converter** built using HTML, CSS, and JavaScript. This project supports multiple unit conversions and reinforces understanding of DOM manipulation, styling, and conditional logic using `case statement`.

## 🚀 Features

- Clean, dark-themed user interface
- Responsive layout using Flexbox
- Font styling with Google Fonts (Poppins)
- Interactive unit conversion via JavaScript
- Input validation for incorrect values
- Hover effects for better UI feedback
- Allows users to choose conversion types using two independent dropdown menus.
- Supported units include:
  - Millimeters (mm)
  - Centimeters (cm)
  - Meters (m)
  - Grams (g)
  - Kilograms (kg)
  - Pounds (pounds)

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
- Replaced `if / else if` with `switch`

### [v1.3] - 2025-07-28
- Enhanced responsive design:
    - Added some basic `@media` queries for different resolutions.
    - `page-content` now uses `height: auto` for flexible vertical scaling.
    - Adjusted `body` height to `100svh` for improved mobile viewport handling.
    - Changed `html` background color to black for a sleeker look.
- Added another dropdown menu to manually select conversion.
- Added temperature conversions.


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



