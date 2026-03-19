# 🌍 SPVLolobo — Site Vitrine Officiel

> Portail officiel du village de **Lolobo** et de sa **Sous-préfecture** — Région de Gbêkê, Département de Béoumi, Côte d'Ivoire.

---

## 📌 Aperçu

**SPVLolobo** est un site vitrine moderne dédié à la sous-préfecture et au village de Lolobo. Il présente :

- L'histoire, la géographie et la culture du village
- Les informations administratives de la sous-préfecture
- L'association de développement **AOL** (Akounda Ouflê de Lolobo)
- Les réalisations et événements marquants de la communauté

🔗 **Site test en ligne :** [https://website-vitrine--bigmj657.replit.app](https://website-vitrine--bigmj657.replit.app)

---

## 🗂️ Structure du projet

```
artifacts/spvlolobo/
├── public/
│   └── images/                      # Images, photos, vidéos
├── src/
│   ├── components/
│   │   ├── decor/
│   │   │   └── BaouleDecor.tsx      # Éléments décoratifs culturels
│   │   └── layout/
│   │       ├── Footer.tsx
│   │       ├── Navbar.tsx
│   │       ├── PageWrapper.tsx
│   │       └── SplashScreen.tsx
│   ├── pages/
│   │   ├── Home.tsx                 # Page d'accueil
│   │   ├── Village.tsx              # Page du village
│   │   ├── SousPrefecture.tsx       # Page de la sous-préfecture
│   │   ├── AOL.tsx                  # Page de l'association AOL
│   │   └── not-found.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

---

## 🚀 Démarrer en local

### Prérequis

- **Node.js** v18 ou supérieur → [télécharger](https://nodejs.org)
- **pnpm** (recommandé) ou npm

```bash
# Installer pnpm si nécessaire
npm install -g pnpm
```

### Installation

```bash
# 1. Cloner le repo
git clone https://github.com/DARK19SMITH/Website-Vitrine.git
cd Website-Vitrine

# 2. Se placer dans le dossier du site
cd artifacts/spvlolobo

# 3. Installer les dépendances
pnpm install
# ou avec npm :
npm install

# 4. Lancer le serveur de développement
pnpm dev
# ou avec npm :
npm run dev
```

Le site sera accessible sur **http://localhost:5173**

### Build pour la production

```bash
pnpm build
# ou
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

### Prévisualiser le build

```bash
pnpm preview
# ou
npm run preview
```

---

## 🛠️ Technologies utilisées

| Technologie | Rôle |
|---|---|
| [React 18](https://react.dev) | Framework UI |
| [TypeScript](https://www.typescriptlang.org) | Typage statique |
| [Vite](https://vitejs.dev) | Bundler & serveur de dev |
| [Tailwind CSS](https://tailwindcss.com) | Styles utilitaires |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Wouter](https://github.com/molefrog/wouter) | Routing léger |
| [Lucide React](https://lucide.dev) | Icônes |
| [shadcn/ui](https://ui.shadcn.com) | Composants UI |

---

## 📄 Pages

| Page | URL | Description |
|---|---|---|
| Accueil | `/` | Hero, présentation générale, vidéo |
| Le Village | `/village` | Histoire, culture, économie |
| Sous-préfecture | `/sous-prefecture` | Administration, sous-préfets, réalisations |
| AOL | `/aol` | Association Akounda Ouflê de Lolobo |

---

## 🌐 Déploiement

Le site est actuellement déployé sur **Replit**. Pour déployer sur une autre plateforme :

**Vercel**
```bash
npm install -g vercel
cd artifacts/spvlolobo
vercel
```

**Netlify**
```bash
pnpm build
# Glisser le dossier dist/ sur netlify.com
```

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour proposer des modifications :

1. Forkez le repo
2. Créez une branche : `git checkout -b feature/ma-modification`
3. Committez : `git commit -m "Ajout de..."`
4. Pushez : `git push origin feature/ma-modification`
5. Ouvrez une **Pull Request**

---

## 📞 Contact

- **Village de Lolobo** — Région de Gbêkê, Département de Béoumi, Côte d'Ivoire
- **Association AOL** — +225 00 00 00 00 00

---

## 📝 Licence

Ce projet est la propriété exclusive du village de Lolobo et de l'AOL.  
Tous droits réservés © 2025 SPVLolobo.
