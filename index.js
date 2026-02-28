const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    console.log('Scanne ce QR code avec WhatsApp :');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot connecté avec succès !');
});

client.initialize();
