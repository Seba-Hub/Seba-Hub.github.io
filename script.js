document.addEventListener("DOMContentLoaded", function () {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    var contentContainer = document.getElementById("content");

    if (isMobile) {
        // Si es un dispositivo móvil, muestra un botón de descarga
        contentContainer.innerHTML = '<button onclick="descargarApp()">Descargar App</button>';
    } else {
        // Si es un escritorio, muestra un código QR
        contentContainer.innerHTML = '<img src="qrsx.png" alt="Código QR para descargar la app">';
    }
});

function descargarApp() {
    var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isiOS) {
        // Redirigir a la App Store de iOS
        window.location.href = 'https://apps.apple.com/tu-enlace-de-la-app';
    } else {
        // Redirigir a la descarga de la APK para dispositivos Android
        window.location.href = 'https://play.google.com/store/apps/eventdetails/4828520667149254021?hl=es';
    }
}