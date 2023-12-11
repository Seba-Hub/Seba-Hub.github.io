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
    // Lógica para descargar la aplicación desde un dispositivo móvil
    alert("Descargando la aplicación...");
    // Puedes redirigir al usuario a la tienda de aplicaciones correspondiente o proporcionar un enlace de descarga directa.
}