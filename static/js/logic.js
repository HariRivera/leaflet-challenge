// URL of the earthquake dataset
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create the map centered on an initial location
const map = L.map('map').setView([20, 0], 2);

// Add the base layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Function to determine color based on depth
function getColor(depth) {
    return depth > 50 ? 'red' :
           depth > 30 ? 'orange' :
           depth > 10 ? 'yellow' :
                        'green';
}

// Fetch and process earthquake data using D3
d3.json(url).then(data => {
    data.features.forEach(feature => {
        const coords = feature.geometry.coordinates;
        const properties = feature.properties;
        const magnitude = properties.mag;
        const depth = coords[2];
        const location = [coords[1], coords[0]];

        // Add marker to the map
        L.circleMarker(location, {
            radius: magnitude * 2, // Adjust size
            color: getColor(depth),
            fillColor: getColor(depth),
            fillOpacity: 0.7
        }).bindPopup(`<b>Magnitude:</b> ${magnitude}<br><b>Location:</b> ${properties.place}<br><b>Depth:</b> ${depth} km`).addTo(map);
    });
});

// Create the legend
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = `
        <b>Depth Legend</b><br>
        <i style="background: green"></i> Depth < 10 km<br>
        <i style="background: yellow"></i> Depth < 30 km<br>
        <i style="background: orange"></i> Depth < 50 km<br>
        <i style="background: red"></i> Depth > 50 km<br>
    `;
    return div;
};

legend.addTo(map);