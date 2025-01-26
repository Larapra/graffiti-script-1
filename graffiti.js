document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded ausgelöst');
    var graffitiButton = document.getElementById('graffitiButton');

    if (graffitiButton) {
        console.log('Graffiti-Button gefunden');
        graffitiButton.addEventListener('click', function () {
            console.log('Button-Klick erkannt');

            // Prüfe, ob ein bestehendes Canvas vorhanden ist
            var existingCanvas = document.getElementById('graffitiCanvas');
            if (!existingCanvas) {
                var canvas = document.createElement('canvas');
                canvas.id = 'graffitiCanvas';
                document.body.appendChild(canvas);
            } else {
                var canvas = existingCanvas;
            }

            // Style anpassen
            canvas.style.display = 'block';

            // Canvas konfigurieren
            var ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
            ctx.fillRect(100, 100, 200, 200);

            console.log('Canvas hinzugefügt und gezeichnet');

            setTimeout(function () {
                console.log('Canvas ausgeblendet');
                canvas.style.display = 'none';
            }, 3000);
        });
    } else {
        console.log("Graffiti-Button nicht gefunden.");
    }
});
