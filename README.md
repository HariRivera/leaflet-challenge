# leaflet-challenge


This project is designed to visualize earthquake data provided by the United States Geological Survey (USGS). The main objective is to create an interactive map that displays earthquake data, with markers representing the magnitude and depth of each earthquake. This visualization helps in educating the public and other government organizations about earthquake activities worldwide.

## Project Structure

- `index.html`: The main HTML file that sets up the structure of the webpage.
- `static/css/style.css`: The CSS file for styling the map and other elements on the webpage.
- `static/js/logic.js`: The JavaScript file that contains the logic for fetching, processing, and visualizing the earthquake data.

## Setup and Usage

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**
    ```bash
    cd <project-directory>
    ```

3. **Open `index.html` in your web browser**
    - You can do this by double-clicking the file or opening it via your browser's "Open File" option.

## Detailed Code Explanation

### index.html

- Sets up the basic HTML structure and includes the necessary CSS and JavaScript files.
- Contains a `<div>` element with the id `map` where the Leaflet map will be rendered.

### static/css/style.css

- Styles the body and heading for better presentation.
- Defines the size of the map container.
- Styles the legend to provide context for the earthquake data visualization.

### static/js/logic.js

- **Fetch earthquake data using D3**: Uses `d3.json` to fetch the GeoJSON data from the USGS API.
  ```javascript
  d3.json(url).then(data => {
      // Process the data
  });