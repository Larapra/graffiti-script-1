document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded ausgelöst');

    var graffitiButton = document.getElementById('graffitiButton');

    if (graffitiButton) {
        console.log('Graffiti-Button gefunden');

        graffitiButton.addEventListener('click', function () {
            console.log('Button-Klick erkannt');

            // Prüfen, ob ein Canvas bereits vorhanden ist
            var canvas = document.getElementById('graffitiCanvas');
            if (!canvas) {
                canvas = document.createElement('canvas');
                canvas.id = 'graffitiCanvas';
                document.body.appendChild(canvas);
            }

            // Canvas konfigurieren
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.zIndex = '1000';
            canvas.style.pointerEvents = 'none';
            canvas.style.display = 'none'; // Start ausgeblendet

            // Canvas anzeigen
            canvas.style.display = 'block';

            // Setup für das Zeichnen
            var ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Das Bild (mit transparentem Hintergrund)
            var image = new Image();
            image.src = 'https://cdn.jsdelivr.net/gh/Larapra/graffiti-script-1@main/IMG_0165-removebg-preview.png';  // Dein Bild-Link

            image.onload = function () {
                console.log('Bild erfolgreich geladen');
                // Sobald das Bild geladen ist, zeichne es auf das Canvas
                var x = canvas.width / 2 - image.width / 2;  // Positioniere das Bild horizontal in der Mitte
                var y = canvas.height / 2 - image.height / 2;  // Positioniere das Bild vertikal in der Mitte

                ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas zuerst leeren
                ctx.drawImage(image, x, y); // Bild zeichnen

                console.log('Bild gezeichnet');
            };

            image.onerror = function () {
                console.error('Fehler beim Laden des Bildes');
            };

            // Nach 3 Sekunden ausblenden
            setTimeout(function () {
                console.log('Canvas nach 3 Sekunden ausgeblendet');
                canvas.style.display = 'none'; // Canvas ausblenden
            }, 3000);
        });
    } else {
        console.log('Graffiti-Button nicht gefunden!');
    }
});
