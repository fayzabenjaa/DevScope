## DevScope
## 1. Présentation du projet


DevScope est une application web qui permet de rechercher des développeurs sur GitHub, de consulter leurs profils et leurs dépôts publics, puis de gérer une shortlist de candidats à l'aide d'une API REST (MockAPI).
L'objectif du projet est de faciliter la recherche et la sélection de profils de développeurs grâce à une interface simple et intuitive.

## 2. Fonctionnalités réalisées
- Recherche de développeurs à partir de leur nom d'utilisateur GitHub.
- Validation du champ de recherche.
- Récupération des données depuis l'API GitHub avec Fetch API.
- Affichage des informations du profil.
- Gestion des états de chargement et des messages d'erreur.
- Affichage des dépôts et de leurs informations.
- Gestion des erreurs lors de la récupération des données.
- Ajout de candidats à la shortlist.
- Enregistrement des candidats sur MockAPI avec une requête POST.
- Prévention de l'ajout de doublons.
- Récupération et affichage des candidats avec une requête GET.
- Gestion des différents cas d'erreur liés aux requêtes API.
- Intégration des pages avec Tailwind CSS.
- Navigation entre les différentes pages.
- Interface responsive adaptée aux différents écrans.
- Validation des champs de recherche.
### Version 2 — Nouvelles fonctionnalités
- Gestion de la shortlist :
    - Affichage du statut de chaque candidat : À contacter, Entretien, Retenu ou Refusé.
    - Affichage d'une note sur 5 pour chaque candidat.
    - Ajout d'un commentaire pour chaque candidat.
    - Modification du statut, de la note et du commentaire depuis une fenêtre de modification.
    - Mise à jour automatique de la carte après modification, sans recharger la page.
    - Suppression d'un candidat de la shortlist.
    - Demande de confirmation avant la suppression.
    - Mise à jour automatique de la liste et du compteur après suppression.

- Recherche et filtrage des dépôts :
    - Ajout d'un champ de recherche pour trouver un dépôt par son nom.
    - Ajout d'une liste déroulante permettant de filtrer les dépôts par langage.
    - Génération dynamique de la liste des langages à partir des dépôts récupérés.
    - Affichage d'un message lorsqu'aucun dépôt ne correspond aux critères de recherche.

- Optimisation des performances avec le cache :
    - Création d'un nouveau module cache.js.
    - Utilisation de localStorage pour enregistrer les profils et les dépôts consultés.
    - Utilisation de JSON.stringify() pour enregistrer les données et de JSON.parse() pour les récupérer.
    - Mise en place d'une durée de validité du cache de 10 minutes.
    - Affichage immédiat des profils déjà consultés lorsque les données sont encore en cache.
    - Nouvelle requête vers GitHub lorsque le cache a expiré.
    - Chargement du profil et des dépôts en parallèle avec Promise.all() afin d'améliorer les performances et de réduire le temps d'attente.
## 3. Technologies et outils utilisés
- HTML5 : pour structurer les pages de l'application.
- Tailwind CSS : pour la mise en forme et la création d'une interface responsive.
- JavaScript : pour gérer les interactions, les événements, la manipulation du DOM et les fonctions asynchrones.
- GitHub API : pour récupérer les profils et les dépôts publics des développeurs.
- Fetch API : pour effectuer les requêtes HTTP et communiquer avec les API.
- MockAPI : pour gérer et stocker les candidats de la shortlist à travers une API REST.
- Git et GitHub : pour la gestion des versions et le suivi du code source.
- GitHub Pages : pour le déploiement et la publication de l'application.
## 4. Ce que j'ai appris

La réalisation de ce projet m'a permis de renforcer mes compétences en développement web, notamment :

- Utilisation de Fetch API pour communiquer avec des API externes.
- Maîtrise des fonctions asynchrones avec async/await.
- Gestion des réponses HTTP avec response.ok.
- Gestion des erreurs avec try/catch.
- Utilisation de MockAPI pour créer et gérer une API REST.
- Organisation du code JavaScript en modules pour améliorer sa structure et sa maintenabilité.
- Amélioration de mes compétences en manipulation du DOM et en gestion des événements.
- Gestion des états de chargement et des messages d'erreur.
- Création d'interfaces responsives avec Tailwind CSS.
- Utilisation des méthodes HTTP PUT et DELETE pour modifier et supprimer des données.
- Utilisation de localStorage pour mettre en place un système de cache avec expiration.
    
## 5. Sources de documentation

Les ressources suivantes m'ont aidé à comprendre et à utiliser les technologies du projet.

- [Fetch API](https://medium.com/skillstuff/the-complete-guide-to-fetch-api-for-modern-javascript-developers-714940460362)

- [MockAPI](https://medium.com/@avishnaarambawela/building-and-testing-a-mock-api-with-mockapi-io-and-aws-lambda-a-step-by-step-guide-20694f295a1f)