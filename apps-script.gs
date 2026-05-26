// ============================================================
// CODE À COLLER DANS APPS SCRIPT DE TON GOOGLE SHEET
// ============================================================
// 1. Ouvre ton sheet : https://docs.google.com/spreadsheets/d/1VLa8KLoxLi8J-KV7D84uF4l1Orkg4JjzkVxU-QfZFMw/edit
// 2. Menu Extensions → Apps Script
// 3. Supprime tout le code existant et colle ce fichier
// 4. Clique sur "Déployer" → "Nouveau déploiement"
//    - Type : "Application Web"
//    - Exécuter en tant que : "Moi"
//    - Accès : "Tout le monde" (anyone)
// 5. Copie l'URL générée (commence par https://script.google.com/macros/s/...)
// 6. Donne-la-moi pour que je l'injecte dans index.html
// ============================================================

const SHEET_ID = '1VLa8KLoxLi8J-KV7D84uF4l1Orkg4JjzkVxU-QfZFMw';
const HEADERS = [
  'Horodatage',
  'Nom parent',
  'Prénom parent',
  'Email',
  'Téléphone',
  'Nb enfants',
  'Enfants (nom prénom)'
];

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    const data = JSON.parse(e.parameter.data);

    // Initialise les en-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    const enfantsStr = data.children
      .map(c => `${c.prenom} ${c.nom}`)
      .join(' ; ');

    sheet.appendRow([
      new Date(),
      data.parent.nom,
      data.parent.prenom,
      data.parent.email,
      data.parent.telephone,
      data.children.length,
      enfantsStr
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Endpoint de test (visiter l'URL dans un navigateur pour vérifier que ça marche)
function doGet() {
  return ContentService
    .createTextOutput('✅ Apps Script actif — endpoint prêt à recevoir les inscriptions.')
    .setMimeType(ContentService.MimeType.TEXT);
}
