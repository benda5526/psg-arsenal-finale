# Inscription Finale Champions League — PSG vs Arsenal

Form d'inscription pour la projection de la finale au Roxy Cinemas City Walk, Dubai.

## Stack

- **Front** : HTML/CSS/JS statique, hébergé sur GitHub Pages
- **Backend** : Google Apps Script qui écrit dans un Google Sheet

## Setup Apps Script (une seule fois)

1. Ouvre le sheet : <https://docs.google.com/spreadsheets/d/1VLa8KLoxLi8J-KV7D84uF4l1Orkg4JjzkVxU-QfZFMw/edit>
2. Menu **Extensions → Apps Script**
3. Colle le contenu de [`apps-script.gs`](apps-script.gs) (remplace tout le code par défaut)
4. **Déployer → Nouveau déploiement**
   - Type : *Application Web*
   - Exécuter en tant que : *Moi*
   - Accès : *Tout le monde*
5. Copie l'URL `https://script.google.com/macros/s/.../exec`
6. Colle-la dans `index.html`, ligne `const APPS_SCRIPT_URL = '...'`
7. Commit et push

## Mise à jour

```bash
git add . && git commit -m "update form" && git push
```

GitHub Pages se met à jour en ~1 minute.
