<div align="center">

# 🌊 TSL Water

**Une « lame d'eau » rendue avec Three.js + WebGPU + TSL** — plan d'eau animé par compute shader, ligne de front (écume de bord) et post-process basé sur la profondeur.

[![Contributors](https://img.shields.io/github/contributors/HouleAdrien/tsl-water.svg?style=flat-square)](https://github.com/HouleAdrien/tsl-water/graphs/contributors)
[![Stargazers](https://img.shields.io/github/stars/HouleAdrien/tsl-water.svg?style=flat-square)](https://github.com/HouleAdrien/tsl-water/stargazers)
[![Issues](https://img.shields.io/github/issues/HouleAdrien/tsl-water.svg?style=flat-square)](https://github.com/HouleAdrien/tsl-water/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![WebGPU](https://img.shields.io/badge/WebGPU-005A9C?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## 📑 Table des matières

1. [À propos du projet](#-à-propos-du-projet)
2. [Technologies utilisées](#-technologies-utilisées)
3. [Prérequis](#-prérequis)
4. [Installation](#-installation)
5. [Utilisation](#-utilisation)
6. [Feuille de route](#-feuille-de-route)
7. [Licence](#-licence)
8. [Contact](#-contact)

---

## 📖 À propos du projet

**TSL Water** est un projet d'apprentissage auto-guidé dont l'objectif final est un **plan d'eau** rendu en temps réel avec le **WebGPURenderer** de Three.js.

L'eau est animée par un **compute shader** écrit en **TSL** (*Three.js Shading Language*), enrichie d'une **ligne de front** (écume de bord détectée par comparaison de profondeur) et d'un **post-process basé sur la profondeur**.

Le dépôt est structuré en **modules progressifs** : on part d'une scène WebGPU minimale pour aller jusqu'au rendu complet de l'eau, en écrivant 100 % du code à la main.

---

## 🛠️ Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| [Three.js](https://threejs.org/) `^0.184` | Moteur de rendu 3D |
| [WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) | API graphique bas niveau (via `WebGPURenderer`) |
| [TSL](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language) | Langage de shading nodal de Three.js |
| [TypeScript](https://www.typescriptlang.org/) `~6.0` | Typage statique |
| [Vite](https://vite.dev/) `^8.0` | Serveur de dev & bundler |

---

## ✅ Prérequis

- **Node.js** ≥ 20 LTS
- Un **navigateur compatible WebGPU** :
  - Chrome / Edge récents (activé par défaut)
  - Firefox (selon version / flag), Safari Technology Preview
  - Vérifier le support : [caniuse.com/webgpu](https://caniuse.com/webgpu)

---

## ⚙️ Installation

```bash
# Cloner le dépôt
git clone https://github.com/HouleAdrien/tsl-water.git
cd tsl-water

# Installer les dépendances
npm install
```

---

## 🚀 Utilisation

```bash
# Lancer le serveur de développement (http://localhost:5173)
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## 🗺️ Feuille de route

- [x] **Module 0** — Scène WebGPU minimale (renderer async, resize, caméra)
- [ ] **Module 1** — Bases de TSL (`MeshBasicNodeMaterial`, `colorNode`, `uv()`)
- [ ] **Module 2** — Géométrie et déplacement de surface
- [ ] **Module 3** — Animation par compute shader (TSL)
- [ ] **Module 4** — Ligne de front (écume) par comparaison de profondeur
- [ ] **Module 5** — Post-process basé sur la profondeur

---

## 📄 Licence

Distribué sous licence **MIT**. Voir le fichier `LICENSE` pour plus d'informations.

---

## 📬 Contact

**Adrien Houle** — adrienhoule01@gmail.com

Lien du projet : [github.com/HouleAdrien/tsl-water](https://github.com/HouleAdrien/tsl-water)
