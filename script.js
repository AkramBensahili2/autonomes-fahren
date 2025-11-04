function showAnswer() {
    const text = document.getElementById("dynamicText");
    text.innerText = "KI-Algorithmen analysieren Millionen Datenpunkte pro Sekunde, um das Fahrzeug sicher zu steuern.";

    const button = event.target;
    button.style.display = "none";
}

function highlightText() {
    document.body.style.backgroundColor = "#e0f7fa";
}

function resetHighlight() {
    document.body.style.backgroundColor = "#f4f6f8";
}

window.addEventListener("keydown", highlightText);
window.addEventListener("keyup", resetHighlight);

function thankUser(event) {
    event.preventDefault();
    alert("Danke für deine Nachricht! Wir melden uns bald.");
}

function showInfo(type) {
    const info = document.getElementById("infoText");

    switch (type) {
        case "auto":
            info.innerText = "Autonome Fahrzeuge navigieren mithilfe von Sensoren, GPS und KI ohne menschliches Eingreifen.";
            break;
        case "ai":
            info.innerText = "Künstliche Intelligenz analysiert Verkehrsdaten, erkennt Muster und optimiert Entscheidungen in Echtzeit.";
            break;
        case "lidar":
            info.innerText = "Lidar-Sensoren messen Entfernungen mit Laserimpulsen und erstellen ein 3D-Bild der Umgebung.";
            break;
        case "traffic":
            info.innerText = "Autonome Autos kommunizieren untereinander, um Staus zu vermeiden und den Verkehrsfluss zu verbessern.";
            break;
    }
}
