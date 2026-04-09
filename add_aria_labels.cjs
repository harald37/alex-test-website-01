const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(srcDir).filter(file => file.endsWith('.tsx'));

const iconLabels = {
  'Menu': 'Menü öffnen',
  'X': 'Schließen',
  'Instagram': 'Instagram Profil',
  'Facebook': 'Facebook Profil',
  'Phone': 'Anrufen',
  'MessageCircle': 'WhatsApp Nachricht',
  'Mail': 'E-Mail senden',
  'ChevronLeft': 'Vorheriges',
  'ChevronRight': 'Nächstes',
  'ChevronDown': 'Nach unten scrollen',
  'ChevronUp': 'Nach oben scrollen',
  'ArrowRight': 'Weiter',
  'ArrowLeft': 'Zurück',
  'Plus': 'Erweitern',
  'Minus': 'Einklappen',
  'Heart': 'Favorit',
  'Camera': 'Fotografie',
  'Star': 'Bewertung',
  'Send': 'Senden',
  'Check': 'Erfolgreich',
  'Download': 'Herunterladen',
  'Share2': 'Teilen',
  'ExternalLink': 'Externer Link',
  'User': 'Benutzer',
  'Settings': 'Einstellungen',
  'Search': 'Suchen',
  'Bell': 'Benachrichtigungen',
  'Home': 'Startseite',
  'Info': 'Informationen',
  'Globe': 'Webseite',
  'Lock': 'Gesperrt',
  'Unlock': 'Entsperrt',
  'Eye': 'Anzeigen',
  'EyeOff': 'Ausblenden',
  'Trash2': 'Löschen',
  'Edit3': 'Bearbeiten',
  'Save': 'Speichern',
  'Copy': 'Kopieren',
  'RefreshCw': 'Aktualisieren',
  'Bookmark': 'Lesezeichen',
  'Filter': 'Filtern',
  'Grid': 'Rasteransicht',
  'List': 'Listenansicht',
  'MapPin': 'Standort',
  'Calendar': 'Kalender',
  'Book': 'Buch',
  'Users': 'Benutzergruppe',
  'MousePointer2': 'Mauszeiger',
  'ArrowDown': 'Nach unten'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Find lucide-react imports
  const importMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);
  if (importMatch) {
    const icons = importMatch[1].split(',').map(i => i.trim());
    icons.forEach(icon => {
      const iconRegex = new RegExp(`<${icon}(?!\\s+aria-label)([^>]*)>`, 'g');
      if (content.match(iconRegex)) {
        const label = iconLabels[icon] || icon;
        content = content.replace(iconRegex, `<${icon} aria-label="${label}"$1>`);
        changed = true;
      }
    });
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
