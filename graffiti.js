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

                // Canvas-Styling sicherstellen
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

            // Canvas konfigurieren
            var ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
            ctx.fillRect(100, 100, 200, 200);

            console.log('Canvas hinzugefügt und gezeichnet');

            // Nach 3 Sekunden ausblenden
            setTimeout(function () {
                console.log('Canvas ausgeblendet');
                canvas.style.display = 'none';
            }, 3000);
        });
    } else {
        console.log("Graffiti-Button nicht gefunden.");
    }
});
