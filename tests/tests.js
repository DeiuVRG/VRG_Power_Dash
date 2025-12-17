/**
 * VRG Power Dash - Test Suite
 * Comprehensive testing for HTML, CSS, JavaScript, and Accessibility
 */

// Test Results Storage
const testResults = {
    total: 0,
    passed: 0,
    failed: 0,
    warnings: 0,
    sections: []
};

// ===== Test Framework =====
class TestSuite {
    constructor(name) {
        this.name = name;
        this.tests = [];
    }

    addTest(name, testFn, details = '') {
        this.tests.push({ name, testFn, details });
    }

    async run() {
        const results = [];
        for (const test of this.tests) {
            try {
                const result = await test.testFn();
                results.push({
                    name: test.name,
                    status: result.status,
                    details: result.details || test.details
                });
            } catch (error) {
                results.push({
                    name: test.name,
                    status: 'fail',
                    details: `Error: ${error.message}`
                });
            }
        }
        return { name: this.name, results };
    }
}

// ===== HTML Structure Tests =====
const htmlTests = new TestSuite('HTML Structure Tests');

htmlTests.addTest('All HTML files exist', async () => {
    const files = ['index.html', 'about.html', 'contact.html', 'products.html', 'monitoring.html', 'login.html', 'register.html', 'checklist.html'];
    const results = [];

    for (const file of files) {
        try {
            const response = await fetch(`../${file}`);
            results.push({ file, exists: response.ok });
        } catch {
            results.push({ file, exists: false });
        }
    }

    const allExist = results.every(r => r.exists);
    const missing = results.filter(r => !r.exists).map(r => r.file);

    return {
        status: allExist ? 'pass' : 'fail',
        details: allExist ? `All ${files.length} HTML files found` : `Missing: ${missing.join(', ')}`
    };
});

htmlTests.addTest('DOCTYPE declaration present', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasDoctype = html.trim().toLowerCase().startsWith('<!doctype html>');

    return {
        status: hasDoctype ? 'pass' : 'fail',
        details: hasDoctype ? 'Valid HTML5 DOCTYPE found' : 'Missing or invalid DOCTYPE'
    };
});

htmlTests.addTest('Meta viewport tag present', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasViewport = html.includes('viewport') && html.includes('width=device-width');

    return {
        status: hasViewport ? 'pass' : 'fail',
        details: hasViewport ? 'Responsive viewport meta tag found' : 'Missing viewport meta tag'
    };
});

htmlTests.addTest('Character encoding declared', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasCharset = html.toLowerCase().includes('charset="utf-8"') || html.toLowerCase().includes('charset=utf-8');

    return {
        status: hasCharset ? 'pass' : 'fail',
        details: hasCharset ? 'UTF-8 charset declared' : 'Missing charset declaration'
    };
});

htmlTests.addTest('Page titles present', async () => {
    const files = ['index.html', 'about.html', 'contact.html', 'monitoring.html'];
    let allHaveTitles = true;

    for (const file of files) {
        const response = await fetch(`../${file}`);
        const html = await response.text();
        const titleMatch = html.match(/<title>(.+?)<\/title>/);
        if (!titleMatch || titleMatch[1].trim() === '') {
            allHaveTitles = false;
            break;
        }
    }

    return {
        status: allHaveTitles ? 'pass' : 'fail',
        details: allHaveTitles ? 'All pages have valid titles' : 'Some pages missing titles'
    };
});

htmlTests.addTest('Navigation structure consistent', async () => {
    const files = ['index.html', 'about.html', 'contact.html', 'products.html', 'monitoring.html'];
    let allHaveNav = true;

    for (const file of files) {
        const response = await fetch(`../${file}`);
        const html = await response.text();
        if (!html.includes('<nav') || !html.includes('navbar')) {
            allHaveNav = false;
            break;
        }
    }

    return {
        status: allHaveNav ? 'pass' : 'fail',
        details: allHaveNav ? 'Navigation present on all pages' : 'Some pages missing navigation'
    };
});

htmlTests.addTest('Footer present on all pages', async () => {
    const files = ['index.html', 'about.html', 'contact.html', 'products.html', 'monitoring.html'];
    let allHaveFooter = true;

    for (const file of files) {
        const response = await fetch(`../${file}`);
        const html = await response.text();
        if (!html.includes('<footer')) {
            allHaveFooter = false;
            break;
        }
    }

    return {
        status: allHaveFooter ? 'pass' : 'fail',
        details: allHaveFooter ? 'Footer present on all pages' : 'Some pages missing footer'
    };
});

// ===== CSS Tests =====
const cssTests = new TestSuite('CSS Style Tests');

cssTests.addTest('Main stylesheet exists', async () => {
    try {
        const response = await fetch('../css/style.css');
        return {
            status: response.ok ? 'pass' : 'fail',
            details: response.ok ? 'style.css found and accessible' : 'style.css not found'
        };
    } catch {
        return { status: 'fail', details: 'Could not fetch style.css' };
    }
});

cssTests.addTest('Auth stylesheet exists', async () => {
    try {
        const response = await fetch('../css/auth.css');
        return {
            status: response.ok ? 'pass' : 'fail',
            details: response.ok ? 'auth.css found and accessible' : 'auth.css not found'
        };
    } catch {
        return { status: 'fail', details: 'Could not fetch auth.css' };
    }
});

cssTests.addTest('CSS variables defined', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const hasVariables = css.includes(':root') && css.includes('--primary-color');

    return {
        status: hasVariables ? 'pass' : 'fail',
        details: hasVariables ? 'CSS custom properties defined' : 'Missing CSS variables'
    };
});

cssTests.addTest('Dark mode styles present', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const hasDarkMode = css.includes('dark-mode') || css.includes('.dark-mode');

    return {
        status: hasDarkMode ? 'pass' : 'fail',
        details: hasDarkMode ? 'Dark mode styles implemented' : 'Missing dark mode styles'
    };
});

cssTests.addTest('Responsive breakpoints defined', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const hasMediaQueries = css.includes('@media') && (css.includes('max-width') || css.includes('min-width'));

    return {
        status: hasMediaQueries ? 'pass' : 'fail',
        details: hasMediaQueries ? 'Responsive media queries found' : 'Missing responsive styles'
    };
});

cssTests.addTest('Toast notification styles present', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const hasToast = css.includes('.toast-notification') || css.includes('.toast-container');

    return {
        status: hasToast ? 'pass' : 'fail',
        details: hasToast ? 'Toast notification styles found' : 'Missing toast styles'
    };
});

cssTests.addTest('Ripple effect styles present', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const hasRipple = css.includes('.ripple-effect') || css.includes('ripple-animation');

    return {
        status: hasRipple ? 'pass' : 'fail',
        details: hasRipple ? 'Ripple effect styles found' : 'Missing ripple styles'
    };
});

cssTests.addTest('Animation keyframes defined', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const keyframeCount = (css.match(/@keyframes/g) || []).length;

    return {
        status: keyframeCount >= 3 ? 'pass' : 'warning',
        details: `${keyframeCount} animation keyframes defined`
    };
});

// ===== JavaScript Tests =====
const jsTests = new TestSuite('JavaScript Functionality Tests');

jsTests.addTest('Main JS file exists', async () => {
    try {
        const response = await fetch('../js/main.js');
        return {
            status: response.ok ? 'pass' : 'fail',
            details: response.ok ? 'main.js found and accessible' : 'main.js not found'
        };
    } catch {
        return { status: 'fail', details: 'Could not fetch main.js' };
    }
});

jsTests.addTest('Dashboard JS file exists', async () => {
    try {
        const response = await fetch('../js/dashboard.js');
        return {
            status: response.ok ? 'pass' : 'fail',
            details: response.ok ? 'dashboard.js found and accessible' : 'dashboard.js not found'
        };
    } catch {
        return { status: 'fail', details: 'Could not fetch dashboard.js' };
    }
});

jsTests.addTest('Auth JS file exists', async () => {
    try {
        const response = await fetch('../js/auth.js');
        return {
            status: response.ok ? 'pass' : 'fail',
            details: response.ok ? 'auth.js found and accessible' : 'auth.js not found'
        };
    } catch {
        return { status: 'fail', details: 'Could not fetch auth.js' };
    }
});

jsTests.addTest('Contact JS file exists', async () => {
    try {
        const response = await fetch('../js/contact.js');
        return {
            status: response.ok ? 'pass' : 'fail',
            details: response.ok ? 'contact.js found and accessible' : 'contact.js not found'
        };
    } catch {
        return { status: 'fail', details: 'Could not fetch contact.js' };
    }
});

jsTests.addTest('ToastManager implemented', async () => {
    const response = await fetch('../js/dashboard.js');
    const js = await response.text();
    const hasToastManager = js.includes('ToastManager') && js.includes('show(');

    return {
        status: hasToastManager ? 'pass' : 'fail',
        details: hasToastManager ? 'ToastManager class implemented' : 'Missing ToastManager'
    };
});

jsTests.addTest('Ripple effect function implemented', async () => {
    const response = await fetch('../js/dashboard.js');
    const js = await response.text();
    const hasRipple = js.includes('createRipple') || js.includes('ripple');

    return {
        status: hasRipple ? 'pass' : 'fail',
        details: hasRipple ? 'Ripple effect function found' : 'Missing ripple function'
    };
});

jsTests.addTest('Device switch handlers present', async () => {
    const response = await fetch('../js/dashboard.js');
    const js = await response.text();
    const hasHandlers = js.includes('device-switch') || js.includes('deviceSwitch');

    return {
        status: hasHandlers ? 'pass' : 'fail',
        details: hasHandlers ? 'Device switch handlers implemented' : 'Missing device handlers'
    };
});

jsTests.addTest('Dark mode toggle implemented', async () => {
    const response = await fetch('../js/main.js');
    const js = await response.text();
    const hasDarkMode = js.includes('darkModeToggle') || js.includes('dark-mode');

    return {
        status: hasDarkMode ? 'pass' : 'fail',
        details: hasDarkMode ? 'Dark mode toggle implemented' : 'Missing dark mode toggle'
    };
});

jsTests.addTest('Form validation present', async () => {
    const response = await fetch('../js/auth.js');
    const js = await response.text();
    const hasValidation = js.includes('validate') || js.includes('required') || js.includes('pattern');

    return {
        status: hasValidation ? 'pass' : 'warning',
        details: hasValidation ? 'Form validation found' : 'Consider adding form validation'
    };
});

jsTests.addTest('No console errors in code', async () => {
    const files = ['main.js', 'dashboard.js', 'auth.js', 'contact.js'];
    let hasDebugLogs = false;

    for (const file of files) {
        try {
            const response = await fetch(`../js/${file}`);
            const js = await response.text();
            // Check for console.error or console.warn but allow console.log
            if (js.includes('console.error(') || js.includes('console.warn(')) {
                hasDebugLogs = true;
                break;
            }
        } catch {
            // File doesn't exist
        }
    }

    return {
        status: hasDebugLogs ? 'warning' : 'pass',
        details: hasDebugLogs ? 'Debug console statements found' : 'No error/warning logs in code'
    };
});

// ===== Accessibility Tests =====
const a11yTests = new TestSuite('Accessibility Tests');

a11yTests.addTest('Alt attributes on images', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const imgTags = html.match(/<img[^>]*>/g) || [];
    const withoutAlt = imgTags.filter(img => !img.includes('alt='));

    return {
        status: withoutAlt.length === 0 ? 'pass' : 'warning',
        details: withoutAlt.length === 0
            ? `All ${imgTags.length} images have alt attributes`
            : `${withoutAlt.length} images missing alt attribute`
    };
});

a11yTests.addTest('Form labels present', async () => {
    const response = await fetch('../login.html');
    const html = await response.text();
    const hasLabels = html.includes('<label');

    return {
        status: hasLabels ? 'pass' : 'fail',
        details: hasLabels ? 'Form labels present' : 'Missing form labels'
    };
});

a11yTests.addTest('ARIA attributes used', async () => {
    const response = await fetch('../monitoring.html');
    const html = await response.text();
    const hasAria = html.includes('aria-') || html.includes('role=');

    return {
        status: hasAria ? 'pass' : 'warning',
        details: hasAria ? 'ARIA attributes found' : 'Consider adding ARIA attributes'
    };
});

a11yTests.addTest('Semantic HTML elements used', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const semanticTags = ['<header', '<nav', '<main', '<section', '<article', '<footer'];
    const foundTags = semanticTags.filter(tag => html.includes(tag));

    return {
        status: foundTags.length >= 4 ? 'pass' : 'warning',
        details: `${foundTags.length}/${semanticTags.length} semantic elements used`
    };
});

a11yTests.addTest('Focus indicators visible', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    const hasFocusStyles = css.includes(':focus') || css.includes('focus-visible');

    return {
        status: hasFocusStyles ? 'pass' : 'warning',
        details: hasFocusStyles ? 'Focus styles defined' : 'Consider adding focus indicators'
    };
});

a11yTests.addTest('Color contrast consideration', async () => {
    const response = await fetch('../css/style.css');
    const css = await response.text();
    // Check if dark mode has appropriate text colors
    const hasDarkTextColors = css.includes('--dark-text') || css.includes('#e0e0e0');

    return {
        status: hasDarkTextColors ? 'pass' : 'warning',
        details: hasDarkTextColors ? 'Color contrast variables defined' : 'Review color contrast'
    };
});

// ===== Performance Tests =====
const perfTests = new TestSuite('Performance & Best Practices');

perfTests.addTest('External CSS loaded from CDN', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasBootstrapCDN = html.includes('cdn.jsdelivr.net') || html.includes('bootstrap');

    return {
        status: hasBootstrapCDN ? 'pass' : 'warning',
        details: hasBootstrapCDN ? 'Bootstrap loaded from CDN' : 'Consider using CDN for libraries'
    };
});

perfTests.addTest('Images optimized (reasonable count)', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const imgCount = (html.match(/<img/g) || []).length;

    return {
        status: imgCount <= 10 ? 'pass' : 'warning',
        details: `${imgCount} images on homepage`
    };
});

perfTests.addTest('Scripts at end of body', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const bodyEnd = html.lastIndexOf('</body>');
    const lastScript = html.lastIndexOf('<script');
    const scriptsAtEnd = lastScript < bodyEnd && lastScript > bodyEnd - 500;

    return {
        status: scriptsAtEnd ? 'pass' : 'warning',
        details: scriptsAtEnd ? 'Scripts loaded at end of body' : 'Consider moving scripts to end of body'
    };
});

perfTests.addTest('Google Analytics configured', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasGA = html.includes('googletagmanager') || html.includes('gtag');

    return {
        status: hasGA ? 'pass' : 'warning',
        details: hasGA ? 'Google Analytics configured' : 'No analytics tracking found'
    };
});

perfTests.addTest('No inline styles overuse', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const inlineStyles = (html.match(/style="/g) || []).length;

    return {
        status: inlineStyles <= 5 ? 'pass' : 'warning',
        details: `${inlineStyles} inline styles found`
    };
});

// ===== Security Tests =====
const securityTests = new TestSuite('Security Tests');

securityTests.addTest('No inline JavaScript in HTML', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasOnclick = html.includes('onclick=') || html.includes('onsubmit=') || html.includes('onload=');

    return {
        status: !hasOnclick ? 'pass' : 'warning',
        details: !hasOnclick ? 'No inline event handlers found' : 'Inline JavaScript detected'
    };
});

securityTests.addTest('HTTPS links used', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const httpLinks = (html.match(/http:\/\//g) || []).length;

    return {
        status: httpLinks === 0 ? 'pass' : 'warning',
        details: httpLinks === 0 ? 'All external links use HTTPS' : `${httpLinks} HTTP links found`
    };
});

securityTests.addTest('No sensitive data in HTML', async () => {
    const response = await fetch('../index.html');
    const html = await response.text();
    const hasSensitive = html.includes('password') && html.includes('value=');

    return {
        status: !hasSensitive ? 'pass' : 'fail',
        details: !hasSensitive ? 'No hardcoded sensitive data' : 'Potential sensitive data in HTML'
    };
});

// ===== Test Runner =====
async function runAllTests() {
    const button = document.getElementById('runTests');
    const progressFill = document.getElementById('progressFill');
    const resultsContainer = document.getElementById('testResults');

    button.disabled = true;
    button.textContent = '⏳ Running Tests...';
    resultsContainer.innerHTML = '';

    // Reset counters
    testResults.total = 0;
    testResults.passed = 0;
    testResults.failed = 0;
    testResults.warnings = 0;
    testResults.sections = [];

    const testSuites = [htmlTests, cssTests, jsTests, a11yTests, perfTests, securityTests];
    const totalSuites = testSuites.length;

    for (let i = 0; i < testSuites.length; i++) {
        const suite = testSuites[i];
        const results = await suite.run();
        testResults.sections.push(results);

        // Update progress
        progressFill.style.width = `${((i + 1) / totalSuites) * 100}%`;

        // Count results
        for (const test of results.results) {
            testResults.total++;
            if (test.status === 'pass') testResults.passed++;
            else if (test.status === 'fail') testResults.failed++;
            else if (test.status === 'warning') testResults.warnings++;
        }
    }

    // Update summary
    document.getElementById('totalTests').textContent = testResults.total;
    document.getElementById('passedTests').textContent = testResults.passed;
    document.getElementById('failedTests').textContent = testResults.failed;
    document.getElementById('warningTests').textContent = testResults.warnings;

    // Render results
    renderResults();

    button.disabled = false;
    button.textContent = '▶ Run All Tests Again';
}

function renderResults() {
    const container = document.getElementById('testResults');

    for (const section of testResults.sections) {
        const sectionHtml = `
            <div class="test-section">
                <h2>
                    ${getSectionIcon(section.name)} ${section.name}
                </h2>
                ${section.results.map(test => `
                    <div class="test-item ${test.status}">
                        <div>
                            <div class="test-name">${test.name}</div>
                            <div class="test-details">${test.details}</div>
                        </div>
                        <span class="test-status ${test.status}">
                            ${test.status.toUpperCase()}
                        </span>
                    </div>
                `).join('')}
            </div>
        `;
        container.innerHTML += sectionHtml;
    }
}

function getSectionIcon(name) {
    const icons = {
        'HTML Structure Tests': '📄',
        'CSS Style Tests': '🎨',
        'JavaScript Functionality Tests': '⚡',
        'Accessibility Tests': '♿',
        'Performance & Best Practices': '🚀',
        'Security Tests': '🔒'
    };
    return icons[name] || '📋';
}

// Auto-run tests on page load (optional)
// window.onload = runAllTests;
