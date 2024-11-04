async function loadRendeles() {
    const response = await fetch('/rendeles');
    const rendeles = await response.json();
    
    const tableBody = document.getElementById('rendeles-body');
    tableBody.innerHTML = ''; // Ürítsd ki a táblázatot

    rendeles.forEach(rendel => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${rendel.orvos}</td>
            <td>${rendel.nap}</td>
            <td>${rendel.ido}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Betöltjük a fogadási rendet az oldal megnyitásakor
window.onload = loadRendeles;
