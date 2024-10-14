// Initialize the map
const map = L.map('map').setView([36.8065, 10.1815], 13); // Coordinates for Tunis

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Function to zoom in
document.getElementById('zoomInBtn').addEventListener('click', function() {
    map.zoomIn();
});

// Function to zoom out
document.getElementById('zoomOutBtn').addEventListener('click', function() {
    map.zoomOut();
});

// Add a marker to the map
const markers = [];
document.getElementById('addMarkerBtn').addEventListener('click', function() {
    const marker = L.marker([36.8065, 10.1815]).addTo(map) // Adds marker at Tunis by default
        .bindPopup('Marker added!').openPopup();
    markers.push(marker);
});

// Layer control (optional)
const baseLayers = {
    'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
};

const overlays = {
    'Markers': L.layerGroup(markers)
};

L.control.layers(baseLayers, overlays).addTo(map);
