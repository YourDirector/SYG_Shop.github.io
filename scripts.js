
function authenticateAdmin() {
    const passcode = prompt('Enter admin passcode:');
    if (passcode === '1234') {
        document.getElementById('admin-tickets').style.display = 'block';
    } else {
        alert('Incorrect passcode!');
    }
}
function sendTicket() {
    const message = document.getElementById('ticket-message').value;
    if (!message) {
        alert('Please enter a ticket message.');
        return;
    }
    alert('Ticket sent successfully!');
}
function handleIPResponse(accept) {
    const ipPrompt = document.getElementById('ip-prompt');
    ipPrompt.style.display = 'none';

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const webhookURL = "https://discord.com/api/webhooks/1324662308680761344/B8S3OmufFNPRol2v_2YMhYUklycfBV7xxgrPZ3fG6bx6x2b_eSO1otl0sB8qabiXP8an"; // Replace with your Discord webhook URL

            const message = accept
                ? `User accepted IP logging. IP: ${ip}`
                : `User denied IP logging. IP: ${ip}`;

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content:				
}
// Send ticket to Discord webhook
function sendTicket() {
    const message = document.getElementById('ticket-message').value;
    const webhookURL = "https://discord.com/api/webhooks/1324662211528097885/W-16S7kZejfSQK8_EP8irTrM3G_ffILPfd9NtwEYd_jxjPwiR5D9O6uVz0UgFAd_4ZVr"; // Replace with your Discord webhook URL

    if (!message) {
        alert('Please enter a ticket message.');
        return;
    }

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
    })
        .then(response => {
            if (response.ok) {
                alert('Ticket sent successfully!');
                document.getElementById('ticket-form').reset();
            } else {
                alert('Failed to send ticket. Please try again.');
            }
        })
        .catch(error => {
            alert('Error sending ticket: ' + error);
        });
}
// Show IP Prompt on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const ipPrompt = document.getElementById('ip-prompt');
    setTimeout(() => {
        ipPrompt.style.bottom = '0'; // Slide up into view
    }, 500); // Delay to ensure smooth load
});

// Handle IP Response
function handleIPResponse(accept) {
    const ipPrompt = document.getElementById('ip-prompt');
    ipPrompt.style.bottom = '-100%'; // Slide out of view

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your Discord webhook URL

            const message = accept
                ? `User accepted IP logging. IP: ${ip}`
                : `User denied IP logging. IP: ${ip}`;

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: message }),
            })
                .then(() => {
                    console.log('IP log sent to Discord.');
                })
                .catch(error => {
                    console.error('Error sending IP log to Discord:', error);
                });
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
        });
}
