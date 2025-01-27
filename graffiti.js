document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded ausgelöst');

    var graffitiButton = document.getElementById('graffitiButton');

    if (graffitiButton) {
        console.log('Graffiti-Button gefunden');

        graffitiButton.addEventListener('click', function () {
            console.log('Button-Klick erkannt');

            // Prüfe, ob ein bestehendes Canvas vorhanden ist
            var canvas = document.getElementById('graffitiCanvas');
            if (!canvas) {
                canvas = document.createElement('canvas');
                canvas.id = 'graffitiCanvas';
                document.body.appendChild(canvas);

                // Canvas konfigurieren
                canvas.style.position = 'fixed';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.zIndex = '1000';
                canvas.style.pointerEvents = 'none';
                canvas.style.display = 'none'; // Start ausgeblendet
            }

            // Canvas anzeigen
            canvas.style.display = 'block';

            // Setup für das Zeichnen
            var ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Farben für die Buchstaben
            var colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FFD700', '#00FFFF'];

            // Schriftgröße an die Fensterbreite anpassen
            var fontSize = Math.min(canvas.width, canvas.height) / 8;
            ctx.font = fontSize + 'px PredikatOneday'; // Deine Graffiti-Schrift
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Position und Text
            var text = 'Bremen';
            var x = canvas.width / 2;
            var y = canvas.height / 2;

            // Zeichne jeden Buchstaben einzeln in einer zufälligen Farbe
            var offsetX = -((text.length - 1) * fontSize) / 4; // Zentriert die Buchstaben
            for (var i = 0; i < text.length; i++) {
                ctx.fillStyle = colors[i % colors.length];
                ctx.fillText(text[i], x + offsetX + i * fontSize * 0.8, y);
            }

            console.log('Canvas hinzugefügt und "Bremen" gezeichnet');

            // Nach 3 Sekunden ausblenden
            setTimeout(function () {
                console.log('Canvas ausgeblendet');
                canvas.style.display = 'none';
            }, 3000);
        });
    } else {
        console.log('Graffiti-Button nicht gefunden.');
    }
});
