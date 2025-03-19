let artworksData = []; // Store artwork data globally

async function fetchArtworks() {
    try {
        // Array of artwork IDs to fetch (these are some popular artworks from the Art Institute of Chicago)
        const artworkIds = [
            129884, // Starry Night and the Astronauts
            27992,  // The Bedroom
            28560,  // A Sunday on La Grande Jatte
            14556,  // Paris Street; Rainy Day
            20684,  // The Old Guitarist
            111628, // Nighthawks
            16487,  // The Child's Bath
            87479,  // Migration Series
            6565,   // Two Sisters (On the Terrace)
            27802   // American Gothic
        ];

        artworksData = await Promise.all(
            artworkIds.map(id => 
                fetch(`https://api.artic.edu/api/v1/artworks/${id}`)
                    .then(response => response.json())
                    .then(data => data.data)
            )
        );

        displayArtworks(artworksData);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('artwork-container').innerHTML = `
            <div class="error">Error loading artwork information.</div>
        `;
    }
}

function displayArtworks(artworks) {
    const container = document.getElementById('artwork-container');
    
    const artworksHTML = artworks.map((artwork, index) => {
        const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
        
        return `
            <div class="artwork" onclick="showArtworkDetails(${index})">
                <img class="artwork-image" src="${imageUrl}" alt="${artwork.thumbnail?.alt_text || artwork.title}" />
                <div class="artwork-info">
                    <h2 class="artwork-title">${artwork.title}</h2>
                    <div class="artwork-artist">${artwork.artist_display}</div>
                    <div class="artwork-details">
                        <div class="detail-group">
                            <div class="detail-label">Date</div>
                            <div class="detail-value">${artwork.date_display}</div>
                        </div>
                        <div class="detail-group">
                            <div class="detail-label">Medium</div>
                            <div class="detail-value">${artwork.medium_display}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = `<div class="artworks-grid">${artworksHTML}</div>`;
}

function showArtworkDetails(index) {
    const artwork = artworksData[index];
    const modal = document.getElementById('artwork-modal');
    const modalContent = document.getElementById('modal-content');
    const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

    modalContent.innerHTML = `
        <img class="modal-image" src="${imageUrl}" alt="${artwork.thumbnail?.alt_text || artwork.title}" />
        <h2 class="modal-title">${artwork.title}</h2>
        <div class="modal-artist">${artwork.artist_display}</div>
        <div class="artwork-details">
            <div class="detail-group">
                <div class="detail-label">Date</div>
                <div class="detail-value">${artwork.date_display}</div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Medium</div>
                <div class="detail-value">${artwork.medium_display}</div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Dimensions</div>
                <div class="detail-value">${artwork.dimensions}</div>
            </div>
            <div class="detail-group">
                <div class="detail-label">Credit Line</div>
                <div class="detail-value">${artwork.credit_line}</div>
            </div>
        </div>
        <div class="modal-description">${artwork.description || 'No description available.'}</div>
    `;

    modal.classList.add('show');
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('artwork-modal');
    const closeButton = document.querySelector('.close-button');

    closeButton.onclick = () => {
        modal.classList.remove('show');
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    };

    // Load artworks
    fetchArtworks();
});