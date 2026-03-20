🌍 SPVLolobo — Site Vitrine Officiel

Portail officiel du village de Lolobo et de sa Sous-préfecture — Région de Gbêkê, Département de Béoumi, Côte d'Ivoire.

Afficher l'image Afficher l'image Afficher l'image Afficher l'image

📌 Aperçu
SPVLolobo est un site vitrine moderne dédié à la sous-préfecture et au village de Lolobo. Il présente :

L'histoire, la géographie et la culture du village
Les informations administratives de la sous-préfecture
L'association de développement AOL (Akounda Ouflê de Lolobo)
Les réalisations et événements marquants de la communauté

🔗 Site test en ligne : https://website-vitrine--bigmj657.replit.app

🗂️ Structure du projet
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

🚀 Démarrer en local
Prérequis

Node.js v18 ou supérieur → télécharger
pnpm v10 ou supérieur

bash# Installer pnpm
npm install -g pnpm

⚡ Première installation (à faire une seule fois)
bash# 1. Cloner le repo
git clone https://github.com/DARK19SMITH/site_web_Vitrine-de_Lolobo_Sous-prefecture_et_Village.git
cd site_web_Vitrine-de_Lolobo_Sous-prefecture_et_Village

# 2. Installer les dépendances (depuis la racine)
pnpm install --ignore-scripts

# 3. Installer les modules spécifiques Windows
pnpm add @rollup/rollup-win32-x64-msvc @esbuild/win32-x64 -w --ignore-scripts

⚠️ Important : toujours lancer pnpm install depuis la racine du projet, pas depuis artifacts/spvlolobo.


▶️ Lancer le site (à faire à chaque fois)
bash# 1. Aller dans le dossier du site
cd artifacts/spvlolobo

# 2. Lancer le serveur (Windows PowerShell)
$env:PORT=5173; $env:BASE_PATH="/"; pnpm dev
Le site sera accessible sur http://localhost:5173 🎉

🔨 Build pour la production
bashpnpm build
Les fichiers compilés seront dans le dossier dist/.
👁️ Prévisualiser le build
bashpnpm preview

🛠️ Technologies utilisées
TechnologieRôleReact 19Framework UITypeScriptTypage statiqueVite 7Bundler & serveur de devTailwind CSSStyles utilitairesFramer MotionAnimationsWouterRouting légerLucide ReactIcônesshadcn/uiComposants UI

📄 Pages
PageURLDescriptionAccueil/Hero, présentation générale, vidéoLe Village/villageHistoire, culture, économieSous-préfecture/sous-prefectureAdministration, sous-préfets, réalisationsAOL/aolAssociation Akounda Ouflê de Lolobo

🌿 Branches Git
BrancheRôlemainVersion officielle — site en lignedevBranche de travail quotidienbackupSauvegarde de sécurité
Flux de travail :
dev → (validation) → main → backup

🌐 Déploiement
Le site est actuellement déployé sur Replit. Pour déployer sur une autre plateforme :
Vercel
bashnpm install -g vercel
cd artifacts/spvlolobo
vercel
Netlify
bashpnpm build
# Glisser le dossier dist/ sur netlify.com

🤝 Contribuer

Forkez le repo
Créez une branche : git checkout -b feature/ma-modification
Committez : git commit -m "Ajout de..."
Pushez : git push origin feature/ma-modification
Ouvrez une Pull Request


📞 Contact

Village de Lolobo — Région de Gbêkê, Département de Béoumi, Côte d'Ivoire
Association AOL — +225 00 00 00 00 00


📝 Licence
Ce projet est la propriété exclusive du village de Lolobo et de l'AOL.
Tous droits réservés © 2025 SPVLolobo.
