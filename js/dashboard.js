// Dashboard specific JavaScript

// Simulated real-time data update
let voltageValue = 220.5;
let currentValue = 8.2;
let powerValue = 1.81;
let tempValue = 24;

// Update dashboard values
function updateDashboardValues() {
    // Simulate small fluctuations
    voltageValue = (220 + Math.random() * 2).toFixed(1);
    currentValue = (8 + Math.random() * 2).toFixed(1);
    powerValue = ((voltageValue * currentValue) / 1000).toFixed(2);
    tempValue = (23 + Math.random() * 3).toFixed(0);
    
    document.getElementById('voltageValue').textContent = voltageValue + ' V';
    document.getElementById('currentValue').textContent = currentValue + ' A';
    document.getElementById('powerValue').textContent = powerValue + ' kW';
    document.getElementById('tempValue').textContent = tempValue + '°C';
}

// Update values every 3 seconds
setInterval(updateDashboardValues, 3000);

// ===== Toast Notification System =====
const ToastManager = {
    container: null,

    init() {
        // Create toast container if it doesn't exist
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            this.container.id = 'toastContainer';
            document.body.appendChild(this.container);
        }
    },

    show(options) {
        this.init();

        const { title, message, type = 'info', duration = 3000 } = options;

        const iconMap = {
            success: 'bi-check-circle-fill',
            error: 'bi-x-circle-fill',
            warning: 'bi-exclamation-triangle-fill',
            info: 'bi-info-circle-fill',
            off: 'bi-power'
        };

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        toast.innerHTML = `
            <i class="bi ${iconMap[type]} toast-icon"></i>
            <div class="toast-content">
                <div class="toast-title">${title}</div>
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" aria-label="Close">
                <i class="bi bi-x"></i>
            </button>
            <div class="toast-progress"></div>
        `;

        // Close button functionality
        toast.querySelector('.toast-close').addEventListener('click', () => {
            this.remove(toast);
        });

        this.container.appendChild(toast);

        // Auto-remove after duration
        setTimeout(() => {
            this.remove(toast);
        }, duration);

        return toast;
    },

    remove(toast) {
        if (toast && toast.parentElement) {
            toast.classList.add('removing');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }
    }
};

// ===== Ripple Effect Function =====
function createRipple(event, element, isOn) {
    const ripple = document.createElement('span');
    ripple.className = `ripple-effect ${isOn ? 'ripple-on' : 'ripple-off'}`;

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    element.appendChild(ripple);

    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== Device Names Map =====
const deviceNames = {
    device1: 'Living Room Lights',
    device2: 'Air Conditioner',
    device3: 'Smart TV',
    device4: 'Coffee Maker',
    device5: 'Desktop Computer',
    device6: 'WiFi Router'
};

// ===== Device Switch Handlers with Ripple Effect =====
const deviceSwitches = document.querySelectorAll('.device-switch');

deviceSwitches.forEach(deviceSwitch => {
    deviceSwitch.addEventListener('change', function(event) {
        const deviceId = this.id;
        const isOn = this.checked;
        const deviceItem = this.closest('.device-item');
        const deviceName = deviceNames[deviceId] || 'Device';

        // Create ripple effect
        createRipple(event, deviceItem, isOn);

        // Add pulse animation to switch
        this.classList.add('switching');
        setTimeout(() => {
            this.classList.remove('switching');
        }, 300);

        // Add highlight animation to device item
        deviceItem.classList.remove('state-on', 'state-off');
        void deviceItem.offsetWidth; // Force reflow
        deviceItem.classList.add(isOn ? 'state-on' : 'state-off');

        // Show toast notification
        ToastManager.show({
            title: isOn ? 'Device Activated' : 'Device Deactivated',
            message: `${deviceName} has been turned ${isOn ? 'ON' : 'OFF'}`,
            type: isOn ? 'success' : 'off',
            duration: 3000
        });

        // Log the action
        console.log(`Device ${deviceId} (${deviceName}) ${isOn ? 'ON' : 'OFF'}`);
    });
});

// Energy Chart using Chart.js
const ctx = document.getElementById('energyChart');
if (ctx) {
    const energyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Energy Consumption (kWh)',
                data: [12.3, 10.8, 13.5, 11.2, 14.1, 15.8, 12.4],
                borderColor: 'rgb(0, 102, 204)',
                backgroundColor: 'rgba(0, 102, 204, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: document.body.classList.contains('dark-mode') ? '#e0e0e0' : '#333333'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: document.body.classList.contains('dark-mode') ? '#e0e0e0' : '#333333'
                    },
                    grid: {
                        color: document.body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: document.body.classList.contains('dark-mode') ? '#e0e0e0' : '#333333'
                    },
                    grid: {
                        color: document.body.classList.contains('dark-mode') ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
    
    // Update chart colors when dark mode is toggled
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        setTimeout(() => {
            const isDark = document.body.classList.contains('dark-mode');
            const textColor = isDark ? '#e0e0e0' : '#333333';
            const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
            
            energyChart.options.plugins.legend.labels.color = textColor;
            energyChart.options.scales.y.ticks.color = textColor;
            energyChart.options.scales.x.ticks.color = textColor;
            energyChart.options.scales.y.grid.color = gridColor;
            energyChart.options.scales.x.grid.color = gridColor;
            energyChart.update();
        }, 100);
    });
}

// Schedule form handler
const scheduleForm = document.getElementById('scheduleForm');
if (scheduleForm) {
    scheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const device = document.getElementById('deviceSelect').value;
        const action = document.getElementById('actionSelect').value;
        const time = document.getElementById('timeInput').value;

        // Get device name from select option
        const deviceSelect = document.getElementById('deviceSelect');
        const deviceName = deviceSelect.options[deviceSelect.selectedIndex].text;

        // Show toast notification
        ToastManager.show({
            title: 'Schedule Created',
            message: `${deviceName} will ${action === 'on' ? 'turn ON' : 'turn OFF'} at ${time}`,
            type: 'success',
            duration: 4000
        });

        // Reset form
        scheduleForm.reset();

        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addScheduleModal'));
        modal.hide();

        console.log('Schedule added:', { device, action, time });
    });
}

// Simulate real-time notifications using ToastManager
function showNotification(message, type = 'info') {
    const typeMap = {
        'success': 'success',
        'info': 'info',
        'warning': 'warning',
        'danger': 'error'
    };

    const titleMap = {
        'success': 'Success',
        'info': 'Information',
        'warning': 'Warning',
        'danger': 'Error'
    };

    ToastManager.show({
        title: titleMap[type] || 'Notification',
        message: message,
        type: typeMap[type] || 'info',
        duration: 4000
    });
}

// Simulate periodic notifications
let notificationCounter = 0;
const notifications = [
    { message: 'System check completed - All devices operating normally', type: 'success' },
    { message: 'Energy consumption optimized - Saving mode activated', type: 'info' },
    { message: 'Voltage spike detected and stabilized', type: 'warning' }
];

// Show a notification every 30 seconds (for demo purposes)
setInterval(() => {
    const notification = notifications[notificationCounter % notifications.length];
    showNotification(notification.message, notification.type);
    notificationCounter++;
}, 30000);

console.log('Dashboard JS loaded successfully');
