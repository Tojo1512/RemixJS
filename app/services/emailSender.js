const nodemailer = require('nodemailer');

function getHtmlTemplate(name, message) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                font-family: Arial, sans-serif;
                padding: 20px;
            }
            .header {
                background-color: #4CAF50;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
            }
            .content {
                background-color: #f8f9fa;
                padding: 20px;
                border-radius: 0 0 5px 5px;
            }
            .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Bonjour ${name}!</h1>
            </div>
            <div class="content">
                ${message}
            </div>
            <div class="footer">
                <p>Cordialement,<br>Votre équipe</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

async function sendHtmlEmail(senderEmail, appPassword, recipientEmail, subject, htmlContent) {
    // Configuration du transporteur
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: senderEmail,
            pass: appPassword
        }
    });

    // Configuration du message
    const message = {
        from: senderEmail,
        to: recipientEmail,
        subject: subject,
        html: htmlContent
    };

    try {
        // Envoi de l'email
        await transporter.sendMail(message);
        return { success: true };
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return { success: false, error: error.message };
    }
}

module.exports = {
    getHtmlTemplate,
    sendHtmlEmail
}; 