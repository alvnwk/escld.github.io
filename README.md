# Site web de l’ESCLD

Site statique responsive réalisé en HTML, CSS et JavaScript, sans framework ni dépendance de compilation.

## Aperçu local

1. Décompressez le dossier.
2. Ouvrez `index.html` dans un navigateur. Pour un environnement local plus fiable, démarrez un serveur statique depuis ce dossier (par exemple `python3 -m http.server 8000`) puis ouvrez `http://localhost:8000`.

## Fichiers

- `index.html` : accueil
- `about.html` : présentation et mission
- `councils.html` : axes thématiques
- `publications.html` : espace éditorial avec recherche et filtre côté navigateur
- `join.html` : manifestation d’intérêt
- `contact.html` : contact
- `legal.html` : modèle de mentions légales à compléter
- `assets/style.css` : style responsive
- `assets/script.js` : navigation mobile, année automatique, filtres et formulaires mailto

## Avant publication

1. Remplacez `YOUR-DOMAIN.example` dans `robots.txt` et `sitemap.xml` par le nom de domaine exact.
2. Vérifiez que `contact@escld.org` est bien l’adresse souhaitée et que le domaine correspondant vous appartient/configure les e-mails. Sinon, remplacez-la partout par votre vraie adresse.
3. Complétez les champs entre crochets dans `legal.html` : adresse officielle du siège, RNA, responsable de publication et hébergeur.
4. Vérifiez la présentation des conseils, les fonctions annoncées, les coordonnées et tout élément qui pourrait laisser croire qu’un programme ou un recrutement existe déjà.
5. Remplacez les textes d’exemple des publications par les articles réellement adoptés et relus.
6. Testez les liens, l’affichage sur téléphone, les formulaires et l’accessibilité au clavier.
7. Configurez HTTPS dans le service d’hébergement et reliez le domaine avec les enregistrements DNS fournis par celui-ci.

## Formulaires

Les formulaires utilisent `mailto:` : ils préremplissent un message dans l’application de messagerie de la personne et ne l’envoient pas à un serveur. Le visiteur doit encore cliquer sur Envoyer. Pour un formulaire réellement envoyé depuis le site, il faudra plus tard configurer un service de formulaires ou un backend.

## Déploiement

Le dossier peut être publié sur un hébergeur statique (par exemple GitHub Pages, Netlify, Cloudflare Pages ou un hébergement web classique). Importez le dossier/repository, puis suivez les instructions DNS et HTTPS données par l’hébergeur. Ne partagez jamais de mot de passe ou de clé privée dans le code.
