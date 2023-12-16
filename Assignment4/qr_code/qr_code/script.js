function generateQRCode() {
  const qrDataInput = document.getElementById('qrData');
  const qrCodeDiv = document.getElementById('qrCode');
  const qrData = qrDataInput.value.trim();

  if (!qrData) {
    alert('Please enter data to generate QR code');
    return;
  }

  // Clear previous QR code
  qrCodeDiv.innerHTML = '';

  // Create QR code image element
  const qrCodeImg = document.createElement('img');
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
  qrCodeImg.alt = 'QR Code';

  // Append the QR code to the container
  qrCodeDiv.appendChild(qrCodeImg);
}
