# leaflet-challenge


This project is designed to visualize earthquake data provided by the United States Geological Survey (USGS). The main objective is to create an interactive map that displays earthquake data, with markers representing the magnitude and depth of each earthquake. This visualization helps in educating the public and other government organizations about earthquake activities worldwide.

## Project Structure

- `index.html`: The main HTML file that sets up the structure of the webpage.
- `static/css/style.css`: The CSS file for styling the map and other elements on the webpage.
- `static/js/logic.js`: The JavaScript file that contains the logic for fetching, processing, and visualizing the earthquake data.


The map is created using Leaflet and a base layer from OpenStreetMap is added without any errors, ensuring a reliable and accurate map background for the visualization.
The earthquake data is fetched from the USGS GeoJSON feed using D3.js (`d3.json`). This ensures that the data is up-to-date and accurately reflects recent earthquake activity.
The size of each marker on the map is proportional to the earthquake's magnitude. This allows users to quickly identify the relative strength of each earthquake.
A legend is added to the map to indicate the color coding based on earthquake depth, providing context for interpreting the visual data.
The markers' sizes are adjusted based on the magnitude of the earthquakes. Larger markers represent stronger earthquakes, making it easy to identify significant events at a glance.
The color of each marker changes based on the depth of the earthquake. This color coding helps distinguish between shallow and deep earthquakes, which can have different implications for the surface.
Each marker has a popup that shows the earthquake's magnitude, location, and depth. This additional information provides users with detailed insights into each earthquake event.
he earthquake data is accurately plotted on the map based on its geographical coordinates, ensuring that each marker represents the correct location of the earthquake.

This project provides an interactive and informative visualization of earthquake data, demonstrating the use of Leaflet for mapping and D3.js for data handling. By accurately representing the magnitude and depth of earthquakes, it helps to educate the public and other stakeholders about the impact of seismic activities. This visualization addresses the problem identified by the USGS, offering a valuable tool for understanding and communicating earthquake data effectively.