# Portfolio — Ndeye Diop

Portfolio Vue 3 (Vite) présentant les deux profils professionnels de Ndeye Diop
(Design graphique/Vidéo/IA et Commerciale/Stratégie Digitale), une galerie de
réalisations et la marque Rokia Jawhar. Thème marron/beige, bascule
clair/sombre, animations au scroll.

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
- `src/data/realisations.js` — galerie de projets (voir ci-dessous)
- `src/data/parfum.js` — contenu de la marque Rokia Jawhar (**provisoire**,
  à compléter dès que l'histoire, les gammes, les prix et les visuels réels
  de la marque seront disponibles)
- `src/views/` — les 5 pages (Accueil, Designer, Commerciale, Réalisations, Parfum)
- `src/components/` — composants réutilisables (navbar, cartes, timeline, galerie…)
- `src/assets/styles/base.css` — palette de couleurs, typographies, animations

## Ajouter une réalisation à la galerie

1. Placer l'image dans `public/images/realisations/` (ex. `logo-xyz.jpg`)
2. Dans `src/data/realisations.js`, ajouter un objet dans le tableau `realisations` :
   ```js
   {
     id: 'logo-xyz',
     title: 'Logo XYZ',
     category: 'design', // 'design' | 'audiovisuel' | 'community' | 'bureautique'
     image: '/images/realisations/logo-xyz.jpg',
     tools: 'Photoshop • Illustrator', // optionnel
     description: 'Courte description du projet.', // optionnel
   }
   ```

La galerie (page **Réalisations**), les filtres par catégorie et la visionneuse
plein écran (lightbox) fonctionnent automatiquement dès qu'il y a des éléments
dans ce tableau — tant qu'il est vide, un message « Galerie en préparation »
s'affiche.

## Changer la photo de profil

1. Placer le fichier image dans `public/images/` (ex. `nd-pp.jpg`)
2. Dans `src/data/designer.js` et `src/data/commerciale.js`, changer :
   ```js
   photo: '/images/nd-pp.jpg',
   ```

Le composant `ProfilePhoto` recadre l'image en cercle (`object-position` dans
`src/components/ui/ProfilePhoto.vue`, à ajuster si le cadrage ne convient pas
à une nouvelle photo).

## Personnaliser les couleurs

Toutes les couleurs sont centralisées en variables CSS dans
`src/assets/styles/base.css` (`[data-theme='light']` et `[data-theme='dark']`).
