# Art Institute of Chicago Gallery

An interactive web gallery showcasing masterpieces from the Art Institute of Chicago's collection. This project uses the Art Institute of Chicago's public API to display artwork information in a responsive grid layout with detailed modal views.

## Features

- Displays 10 notable artworks from the Art Institute of Chicago
- Responsive grid layout that adapts to different screen sizes
- Interactive artwork cards with hover effects
- Detailed modal view for each artwork showing:
  - High-resolution artwork image
  - Artist information
  - Artwork details (date, medium, dimensions)
  - Full artwork description
  - Credit information

## Technologies Used

- HTML5
- CSS3 (with Grid and Flexbox)
- JavaScript (ES6+)
- Art Institute of Chicago API

## Setup

1. Clone or download this repository
2. Open `index.html` in a modern web browser

No additional setup or API keys are required as the Art Institute of Chicago API is publicly accessible.

## How It Works

The application fetches artwork data from the Art Institute of Chicago's API and displays it in a responsive grid. Each artwork is displayed in a card that shows:
- Artwork image
- Title
- Artist
- Basic details

Clicking on any artwork card opens a modal window with additional details about the piece, including a larger image and full description.

## API Information

This project uses the Art Institute of Chicago's public API:
- Base URL: `https://api.artic.edu/api/v1`
- Documentation: [Art Institute of Chicago API Documentation](https://api.artic.edu/docs/)

## Browser Support

The gallery works best in modern browsers that support:
- CSS Grid
- CSS Flexbox
- ES6+ JavaScript features
- Fetch API

## License

This project is open source and uses content from the Art Institute of Chicago's API, which is available under Creative Commons Zero (CC0) license.