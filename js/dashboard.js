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

// Device switch handlers
const deviceSwitches = document.querySelectorAll('.device-switch');

deviceSwitches.forEach(deviceSwitch => {
    deviceSwitch.addEventListener('change', function() {
        const deviceId = this.id;
        const isOn = this.checked;
        
        // Create toast notification
        const toastHtml = `
            <div class="toast align-items-center text-white ${isOn ? 'bg-success' : 'bg-secondary'} border-0" role="alert">
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="bi ${isOn ? 'bi-check-circle-fill' : 'bi-x-circle-fill'} me-2"></i>
                        Device ${isOn ? 'turned ON' : 'turned OFF'} successfully
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
                </div>
            </div>
        `;
        
        const toastContainer = document.createElement('div');
        toastContainer.style.position = 'fixed';
        toastContainer.style.top = '100px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '9999';
        toastContainer.innerHTML = toastHtml;
        document.body.appendChild(toastContainer);
        
        const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
        toast.show();
        
        setTimeout(() => {
            toastContainer.remove();
        }, 3000);
        
        // Log the action
        console.log(`Device ${deviceId} ${isOn ? 'ON' : 'OFF'}`);
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
        
        // Show success message
        const alertHtml = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i>
                Schedule added successfully! Device will ${action === 'on' ? 'turn on' : 'turn off'} at ${time}.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        
        const alertContainer = document.createElement('div');
        alertContainer.style.position = 'fixed';
        alertContainer.style.top = '100px';
        alertContainer.style.right = '20px';
        alertContainer.style.zIndex = '9999';
        alertContainer.style.minWidth = '300px';
        alertContainer.innerHTML = alertHtml;
        document.body.appendChild(alertContainer);
        
        setTimeout(() => {
            alertContainer.remove();
        }, 5000);
        
        // Reset form
        scheduleForm.reset();
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addScheduleModal'));
        modal.hide();
        
        console.log('Schedule added:', { device, action, time });
    });
}

// Simulate real-time notifications
function showNotification(message, type = 'info') {
    const iconMap = {
        'success': 'check-circle-fill',
        'info': 'info-circle-fill',
        'warning': 'exclamation-triangle-fill',
        'danger': 'x-circle-fill'
    };
    
    const toastHtml = `
        <div class="toast align-items-center text-white bg-${type} border-0" role="alert">
            <div class="d-flex">
                <div class="toast-body">
                    <i class="bi bi-${iconMap[type]} me-2"></i>
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    
    const toastContainer = document.createElement('div');
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '100px';
    toastContainer.style.right = '20px';
    toastContainer.style.zIndex = '9999';
    toastContainer.innerHTML = toastHtml;
    document.body.appendChild(toastContainer);
    
    const toast = new bootstrap.Toast(toastContainer.querySelector('.toast'));
    toast.show();
    
    setTimeout(() => {
        toastContainer.remove();
    }, 4000);
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
