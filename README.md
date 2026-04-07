# Apex Senegel Web

Application web interactive de formation et de coaching, conçue pour digitaliser les 12 Programmes de Formation Transformateurs APEx au Sénégal.

## Objectif

Plateforme centrale bilingue (Français / Wolof) destinée aux **Apprenants** (Jeunes, Femmes, Artisans, Artistes) et aux **Coachs Digitaux APEx (P12)**, intégrant l'IA pour le feedback, le coaching et la validation des compétences.

## Fonctionnalités principales

- **Simulateur de Confrontation** — IA Coach pour pratiquer pitch et négociation
- **Badges de Compétence** — Suivi de certification avec lien vérifiable
- **Portefeuille d'Artefacts** — Upload de preuves (photos, vidéos, fichiers)
- **Journal d'Action Vocale** — Enregistrement hors ligne, transcription IA
- **Bibliothèque Pédagogique** — Guides et micro-leçons téléchargeables
- **Réseau d'Entraide** — Messagerie Coach / Apprenant
- **Tableau de Bord Coach** — Suivi de cohorte, saisie GEP/GCA, génération de rapports

## Stack technique

| Côté | Technologie |
|------|-------------|
| Frontend | React |
| Backend | Node.js / Express.js |
| Base de données | PostgreSQL |

## Principes de conception

- **Responsive** — Accessible sur desktop, tablette et mobile
- **Offline-first** — Toutes les saisies fonctionnent sans réseau, synchronisation automatique
- **Accessibilité** — Lecture vocale, gros boutons, navigation par icônes
- **Sécurité** — Chiffrement de bout en bout, double authentification pour les actions critiques
- **Design africain** — Charte graphique chaleureuse, couleurs vives, icônes culturelles

## Langues supportées

- Français
- Wolof *(et autres langues locales)*

## Installation
```bash
# Cloner le repo
git clone git@github.com:wyze-groupe/Apex-senegel-web.git
cd Apex-senegel-web

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```