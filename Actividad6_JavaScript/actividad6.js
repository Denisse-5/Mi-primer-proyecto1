let html = `<ul>`;
for (const aux of catalogo) {
    html += `<li>${Object.values(aux)}</li>`;
}

html += `<lu>`;

document.getElementById('impresion').innerHTML = html;