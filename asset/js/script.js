document.getElementById('linkForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const originalUrl = document.getElementById('originalUrl').value;
    const mirrorDomains = [
        'https://mirror1.example.com/',
        'https://mirror2.example.com/',
        'https://mirror3.example.com/',
        'https://mirror4.example.com/',
        'https://mirror5.example.com/'
    ];
    
    let mirrorLinksContainer = document.getElementById('mirrorLinks');
    mirrorLinksContainer.innerHTML = '<h2>Mirror Links:</h2>';
    
    mirrorDomains.forEach(domain => {
        const mirrorUrl = domain + encodeURIComponent(originalUrl);
        const linkElement = document.createElement('a');
        linkElement.href = mirrorUrl;
        linkElement.textContent = mirrorUrl;
        linkElement.className = 'mirror-link';
        linkElement.target = '_blank';
        
        mirrorLinksContainer.appendChild(linkElement);
    });
});
