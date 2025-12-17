# VRG Power Dash - Smart Home Energy Management Website

## Project Overview
VRG Power Dash is a comprehensive web-based platform for managing IoT devices and monitoring home energy consumption. This bachelor's thesis project demonstrates a complete frontend solution for voltage stabilization, remote device control, and intelligent energy management.

## Features Implemented

### ✅ Mandatory Requirements
- [x] **Fixed Navigation Bar** with active page highlighting
- [x] **Functional Search Feature** across all pages
- [x] **Image Carousel** on homepage with 5 product images
- [x] **Components Table** with technical specifications
- [x] **Contact Form** with full validation (email, phone, required fields)
- [x] **YouTube Video** integration on About page
- [x] **Social Media Icons** (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- [x] **Help Button** (modal with information)
- [x] **UP/DOWN Scroll Buttons** (appear/disappear based on position)
- [x] **Fully Responsive Design** (mobile, tablet, desktop)
- [x] **Dark/Light Mode Toggle** (persistent with localStorage)
- [x] **Google Analytics Integration** (ready for GA_MEASUREMENT_ID)
- [x] **5+ Web Pages** (Home, Products, Dashboard, About, Contact)
- [x] **User Panel/Dashboard** with 100% functional controls

### 🚀 Additional Features
- Real-time device control with toggle switches
- Live energy monitoring with Chart.js graphs
- Animated statistics and notifications
- Schedule system for automated device control
- Form validation with real-time feedback
- Smooth animations and transitions
- Interactive maps integration
- Modern gradient designs

## File Structure

```
STDC_DeiuVRG/
├── index.html              # Homepage
├── products.html           # Products & Components
├── monitoring.html         # Dashboard & User Panel
├── about.html             # About & Video
├── contact.html           # Contact Form
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Core functionality
│   ├── dashboard.js       # Dashboard features
│   └── contact.js         # Form validation
└── img/
    ├── logo.svg           # Company logo (vector)
    ├── Logo3.png          # Company logo (raster)
    ├── p1.jpeg            # Product image 1
    ├── p2.jpeg            # Product image 2
    ├── p3.jpeg            # Product image 3
    ├── p4.png             # Product image 4
    └── p5.png             # Product image 5
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5.3.2** - Responsive framework
- **Bootstrap Icons** - Icon library
- **JavaScript (ES6+)** - Interactive functionality
- **Chart.js** - Data visualization
- **Google Analytics** - Usage tracking

## Setup Instructions

### 1. Google Analytics Setup (Optional)
Replace `GA_MEASUREMENT_ID` in all HTML files with your actual Google Analytics ID:
```html
gtag('config', 'YOUR_GA_MEASUREMENT_ID_HERE');
```

### 2. Start Local Server

#### Option A: Using Python (Recommended)
```bash
# Navigate to the project directory
cd "/Users/deiuvrg/Library/CloudStorage/OneDrive-UniversitateaPolitehnicaTimisoara/An4IS/PIUG/STDC_DeiuVRG"

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option B: Using Node.js
```bash
# Install http-server globally (first time only)
npm install -g http-server

# Start server
http-server -p 8000
```

#### Option C: Using PHP
```bash
php -S localhost:8000
```

### 3. Access the Website
Open your browser and navigate to:
```
http://localhost:8000
```

### 4. Testing on Mobile Device

**Same WiFi Network Method:**
1. Ensure your computer and phone are on the same WiFi network
2. Find your computer's IP address:
   - **macOS**: System Preferences > Network > Advanced > TCP/IP
   - Or run in terminal: `ipconfig getifaddr en0` (WiFi) or `ipconfig getifaddr en1`
3. On your phone, open browser and navigate to:
   ```
   http://YOUR_COMPUTER_IP:8000
   ```
   Example: `http://192.168.1.100:8000`

**Alternative: Use ngrok (for remote testing)**
1. Download ngrok: https://ngrok.com/download
2. Start your local server (port 8000)
3. In another terminal, run:
   ```bash
   ngrok http 8000
   ```
4. Use the provided public URL on any device

## Features Guide

### Navigation
- Click any navigation link to switch between pages
- Active page is highlighted in the navbar
- Mobile: Hamburger menu for responsive navigation

### Search
- Enter keywords in the search bar
- Press Enter or click the search icon
- Results appear in a modal dialog

### Dark/Light Mode
- Click the moon/sun icon in the navbar
- Theme preference is saved in browser
- All pages automatically use saved preference

### Dashboard (monitoring.html)
- **Real-time Monitoring**: Voltage, current, power, temperature
- **Device Control**: Toggle switches for 6 devices
- **Energy Charts**: Weekly consumption visualization
- **Scheduling**: Add automated device schedules
- **Notifications**: System alerts and updates

### Contact Form
- All fields are validated in real-time
- Email format validation
- Romanian phone number format (+40 xxx xxx xxx)
- Required fields marked with *
- Success message after submission

### Scroll Buttons
- Appear after scrolling 300px down
- UP button: Scroll to top
- DOWN button: Scroll to bottom
- Smooth scrolling animation

## Responsive Breakpoints

- **Desktop**: > 992px (Full layout)
- **Tablet**: 768px - 991px (Adjusted layout)
- **Mobile**: < 767px (Stacked layout)

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00cc99;
    --dark-bg: #1a1a2e;
    /* ... */
}
```

### Content
- Edit HTML files directly
- Images in `img/` folder
- Update company information in footer

### Analytics Events
Custom events are tracked for:
- Form submissions
- Device toggles
- Page navigation

## Known Limitations

1. Dashboard data is simulated (not connected to real backend)
2. Contact form doesn't actually send emails (needs backend)
3. Device controls are frontend-only (needs IoT backend)
4. Google Analytics requires valid measurement ID

## Future Enhancements

- Backend API integration
- Real-time WebSocket connections
- Database for data persistence
- User authentication system
- Email notification service
- PWA capabilities
- Multi-language support

## Project Information

**Institution:** Universitatea Politehnica Timișoara  
**Faculty:** Automatică și Calculatoare  
**Project Type:** Bachelor's Thesis  
**Year:** 2025  
**Topic:** Home Voltage Stabilizer, Remote Device Control & Energy Management

## Support

For questions or issues:
- Email: info@vrgpowerdash.ro
- Check the Help button (?) on any page

## License

This is an educational project created for academic purposes.

---

**Author:** Deiu VRG  
**Last Updated:** November 2025
