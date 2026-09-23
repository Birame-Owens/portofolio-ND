# Portfolio — Ndeye Diop

Portfolio Vue 3 (Vite) présentant les deux profils professionnels de Ndeye Diop
(Design graphique/Vidéo/IA et Commerciale/Stratégie Digitale) ainsi que la
marque Rokia Jawhar. Thème marron/beige, bascule clair/sombre, animations au
scroll.

## Lancer le projet

```bash
npm install
npm run dev       # serveur de développement
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
```

## Structure

- `src/data/designer.js` — contenu du profil Designer (CV 1)
- `src/data/commerciale.js` — contenu du profil Commerciale (CV 2)
- `src/data/parfum.js` — contenu de la marque Rokia Jawhar (**provisoire**,
  à compléter dès que l'histoire, les gammes, les prix et les visuels réels
  de la marque seront disponibles)
- `src/views/` — les 4 pages (Accueil, Designer, Commerciale, Parfum)
- `src/components/` — composants réutilisables (navbar, cartes, timeline…)
- `src/assets/styles/base.css` — palette de couleurs, typographies, animations

## Ajouter les vraies photos de profil

Le portfolio affiche pour l'instant un monogramme "ND" à la place de la
photo. Pour mettre une vraie photo :

1. Placer le fichier image dans `public/images/` (ex. `photo-ndeye.jpg`)
2. Dans `src/data/designer.js` et/ou `src/data/commerciale.js`, changer :
   ```js
   photo: null,
   ```
   en :
   ```js
   photo: '/images/photo-ndeye.jpg',
   ```

Le composant `ProfilePhoto` affichera automatiquement la photo dès qu'un
chemin est renseigné.

## Personnaliser les couleurs

Toutes les couleurs sont centralisées en variables CSS dans
`src/assets/styles/base.css` (`[data-theme='light']` et `[data-theme='dark']`).
