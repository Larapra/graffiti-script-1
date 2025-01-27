<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Graffiti Button
        var graffitiButton = document.getElementById('graffitiButton');
        
        if (graffitiButton) {
            // Button-Stil über JavaScript hinzufügen
            graffitiButton.style.position = 'fixed';
            graffitiButton.style.top = '70px';  // Button nach unten verschieben
            graffitiButton.style.left = '10px';
            graffitiButton.style.backgroundColor = '#333';
            graffitiButton.style.color = 'white';
            graffitiButton.style.border = 'none';
            graffitiButton.style.padding = '10px 20px';
            graffitiButton.style.cursor = 'pointer';
            graffitiButton.style.fontSize = '16px';
            graffitiButton.style.zIndex = '1001';  // Button über Canvas legen

            graffitiButton.addEventListener('click', function () {
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
                canvas.style.display = 'none'; // Canvas anfangs unsichtbar

                // Canvas anzeigen
                canvas.style.display = 'block';

                // Setup für das Zeichnen
                var ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Das Bild (mit transparentem Hintergrund)
                var image = new Image();
                image.src = 'https://images.squarespace-cdn.com/content/67951ec2543711495fcacdd7/2fa5d627-9239-4ccd-89fb-70581bbc2eee/IMG_0165-removebg-preview.png?content-type=image%2Fpng';  // Dein Bild-Link

                image.onload = function () {
                    console.log('Bild erfolgreich geladen');
                    
                    // Bildgröße anpassen
                    var scaledWidth = image.width * 1.5;  // Beispiel: Bild um 1,5x vergrößern
                    var scaledHeight = image.height * 1.5;  // Beispiel: Bild um 1,5x vergrößern

                    var x = canvas.width / 2 - scaledWidth / 2;  // Positioniere das Bild horizontal in der Mitte
                    var y = canvas.height / 2 - scaledHeight / 2;  // Positioniere das Bild vertikal in der Mitte

                    ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas zuerst leeren
                    ctx.drawImage(image, x, y, scaledWidth, scaledHeight); // Bild größer zeichnen

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
</script>
