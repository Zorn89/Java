function createHTMLList(liste) {
    if (!Array.isArray(liste) || liste.length === 0) {
      return '<ul></ul>'; // Leere Liste, wenn die Eingabe ungültig ist oder leer
    }
  
    let htmlString = '<ul>';
  
    for (const element of liste) {
      htmlString += `<li>${element}</li>`;
    }
  
    htmlString += '</ul>';
    return htmlString;
  }
  
  // Beispielaufruf
  const meineListe = ['eins', 'zwei', 'drei'];
  const htmlListe = createHTMLList(meineListe);
  console.log(htmlListe); // Ausgabe: <ul><li>eins</li><li>zwei</li><li>drei</li></ul>