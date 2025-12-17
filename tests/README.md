# VRG Power Dash - Test Suite

## Overview

This folder contains automated tests for the VRG Power Dash project. The test suite covers:

- **HTML Structure Tests** - Validates HTML files, DOCTYPE, meta tags, navigation, and footer
- **CSS Style Tests** - Checks stylesheets, CSS variables, dark mode, responsive design, animations
- **JavaScript Functionality Tests** - Verifies JS files, ToastManager, ripple effects, event handlers
- **Accessibility Tests** - Tests for alt attributes, labels, ARIA, semantic HTML, focus indicators
- **Performance Tests** - CDN usage, image optimization, script placement, analytics
- **Security Tests** - Checks for inline JS, HTTPS links, sensitive data exposure

## How to Run Tests

### Method 1: Local Server (Recommended)

1. Open terminal in the project root folder
2. Start a local server:
   ```bash
   python3 -m http.server 8080
   ```
3. Open browser and navigate to:
   ```
   http://localhost:8080/tests/test-runner.html
   ```
4. Click **"Run All Tests"** button

### Method 2: Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click on `tests/test-runner.html`
3. Select "Open with Live Server"
4. Click **"Run All Tests"** button

## Test Categories

| Category | Tests | Description |
|----------|-------|-------------|
| HTML Structure | 7 | File existence, DOCTYPE, meta tags, navigation, footer |
| CSS Styles | 8 | Stylesheets, variables, dark mode, responsive, animations |
| JavaScript | 10 | JS files, ToastManager, ripple, handlers, validation |
| Accessibility | 6 | Alt text, labels, ARIA, semantic HTML, focus, contrast |
| Performance | 5 | CDN, images, script placement, analytics, inline styles |
| Security | 3 | Inline JS, HTTPS, sensitive data |

**Total: 39 tests**

## Test Results

- **PASS** (Green) - Test passed successfully
- **FAIL** (Red) - Test failed, needs attention
- **WARNING** (Yellow) - Test passed with recommendations

## Files

- `test-runner.html` - Main test runner interface
- `tests.js` - All test suites and logic
- `README.md` - This documentation

## Adding New Tests

To add a new test, edit `tests.js` and add to the appropriate test suite:

```javascript
htmlTests.addTest('Test name', async () => {
    // Test logic here
    const result = /* your test */;

    return {
        status: result ? 'pass' : 'fail',
        details: 'Description of result'
    };
});
```

## Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Local server for running tests (due to CORS restrictions)
- No external dependencies required
