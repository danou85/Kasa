# Kasa - Refonte du Site de Location d'Appartements

## Description

Ce projet consiste en la refonte du site de Kasa, une entreprise leader dans la location d'appartements entre particuliers en France. Le site a été entièrement reconstruit avec React pour le front-end et NodeJS pour le back-end, offrant une expérience utilisateur moderne et responsive.

## Table des matières

- [Contexte de la Mission](#contexte-de-la-mission)
- [Fonctionnalités](#fonctionnalités)
- [Design](#design)
- [Étapes de Développement](#étapes-de-développement)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Remerciements](#remerciements)

## Contexte de la Mission

Kasa a lancé une refonte totale de son site, initialement codé en ASP.NET, pour passer à une stack JavaScript moderne. L'objectif est de créer une application web performante et responsive en utilisant React. Le développement est basé sur les nouvelles maquettes fournies par le designer, Paul.

## Fonctionnalités

- **Galerie d'Images** :
  - Défilement des images avec des boutons "Précédent" et "Suivant".
  - Si l'utilisateur est à la première image et clique sur "Précédent", la dernière image s'affiche.
  - Inversement, si l'utilisateur est à la dernière image et clique sur "Suivant", la première image s'affiche.
  - Les boutons de navigation n'apparaissent pas si une seule image est présente.

- **Collapse** :
  - Les sections de type Collapse sont fermées par défaut à l'initialisation.
  - Un clic sur une section ouverte la ferme, tandis qu'un clic sur une section fermée l'ouvre.

## Design

Le design de l'application a été élaboré sur Figma. Les maquettes incluent :
- Ressources graphiques (logo, icônes, etc.) exportables au format souhaité.
- Prototypes du site pour voir les animations attendues, notamment sur les menus déroulants.

## Étapes de Développement

1. **Configuration du Projet** :
   - Utilisation de Create React App ou Vite pour le démarrage de l'application.
   - Organisation des composants React basés sur les maquettes Figma.

2. **Implémentation des Composants** :
   - Développement des composants pour la galerie d'images et les sections Collapse.
   - Intégration des fonctionnalités de navigation dans la galerie.

3. **Gestion des Données** :
   - Utilisation d'un fichier JSON fourni pour simuler les annonces de logements pendant le développement.

## Installation

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/kasa-refonte.git
   cd kasa-refonte
