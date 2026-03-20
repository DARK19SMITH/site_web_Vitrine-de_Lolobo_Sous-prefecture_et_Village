# 🌍 SPVLolobo — Site Vitrine Officiel

> Portail officiel du village de **Lolobo** et de sa **Sous-préfecture** — Région de Gbêkê, Département de Béoumi, Côte d'Ivoire.

## 📌 Aperçu

SPVLolobo est un site vitrine moderne dédié à la sous-préfecture et au village de Lolobo.

🔗 **Site en ligne :** https://website-vitrine--bigmj657.replit.app

## 🚀 Démarrer en local

### Première installation (une seule fois)
```bash
git clone https://github.com/DARK19SMITH/site_web_Vitrine-de_Lolobo_Sous-prefecture_et_Village.git
cd site_web_Vitrine-de_Lolobo_Sous-prefecture_et_Village
pnpm install --ignore-scripts
pnpm add @rollup/rollup-win32-x64-msvc @esbuild/win32-x64 -w --ignore-scripts
```

### Lancer le site (à chaque fois)
```bash
cd artifacts/spvlolobo
$env:PORT=5173; $env:BASE_PATH="/"; pnpm dev
```

Ouvrez **http://localhost:5173** 🎉
