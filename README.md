# Projet Dinopark

## Description

Dinopark est une application web conçue pour un parc à thème fictif sur les dinosaures. Le site permet aux utilisateurs de consulter des informations sur les différentes espèces présentées dans le parc, d'effectuer des réservations de billets et de gérer leur compte personnel. Une interface d'administration est également disponible pour la gestion des dinosaures.

## Fonctionnalités

  * **Page d'accueil** : Présentation générale du parc et mise en avant de certains dinosaures.
  * **Catalogue des dinosaures** : Une section dédiée à la présentation de tous les dinosaures du parc. Chaque dinosaure dispose d'une page individuelle détaillant ses caractéristiques.
  * **Système de réservation** : Un formulaire permettant aux utilisateurs de réserver leurs billets pour une date de visite spécifique.
  * **Authentification des utilisateurs** :
      * Création d'un compte personnel.
      * Connexion à un espace utilisateur sécurisé.
      * Les mots de passe sont hachés via l'algorithme **Argon2** pour garantir la sécurité des données.
  * **Gestion de compte** : Une fois authentifiés, les utilisateurs ont accès à une page de gestion de leur profil.
  * **Panneau d'administration** :
      * Une section privée réservée aux administrateurs.
      * Possibilité de modifier les informations des dinosaures.
      * Gestion des droits d'accès via un middleware dédié.

## Environnement technique

Le projet est développé sur la base des technologies suivantes :

  * **Backend** :
      * **Node.js** avec le framework **Express** pour la gestion du serveur.
      * **TypeScript** pour le typage statique du code.
      * **PostgreSQL** pour le système de gestion de base de données.
  * **Frontend** :
      * **EJS (Embedded JavaScript templates)** pour le rendu des vues côté serveur.
      * **Sass (SCSS)** pour la pré-compilation des feuilles de style CSS.
  * **Outils** :
      * **tsx** pour l'exécution des fichiers TypeScript.
      * **dotenv** pour la gestion des variables d'environnement.
      * **Zod** pour la validation des schémas de données.
      * **method-override** pour l'utilisation des verbes HTTP PUT et DELETE.

-----

## Installation et Démarrage

Veuillez suivre les étapes ci-dessous pour exécuter le projet sur un environnement local.

### Prérequis

  * Node.js (version 20 ou supérieure)
  * NPM (Node Package Manager)
  * Une instance active de PostgreSQL

### 1\. Clonage du dépôt

```bash
git clone <URL_DU_DEPOT>
cd dinopark
```

### 2\. Installation des dépendances

Exécutez la commande suivante pour installer les dépendances nécessaires au projet.

```bash
npm install
```

### 3\. Configuration de la base de données

1.  Connectez-vous à votre instance PostgreSQL.
2.  Créez une base de données dédiée au projet.
3.  Exécutez le script `data.sql` pour initialiser le schéma de la base de données et insérer les données initiales.

### 4\. Configuration des variables d'environnement

1.  À la racine du projet, créez un fichier `.env` en vous basant sur le modèle `.env.example`.
2.  Renseignez les variables d'environnement avec les informations de connexion à votre base de données :

<!-- end list -->

```env
PGUSER=VOTRE_UTILISATEUR_PG
PGPASSWORD=VOTRE_MOT_DE_PASSE_PG
PGHOST=VOTRE_HOTE_PG
PGPORT=VOTRE_PORT_PG
PGDATABASE=NOM_DE_VOTRE_BASE_DE_DONNEES
```

### 5\. Lancement du serveur

Utilisez la commande suivante pour démarrer le serveur de développement. Le serveur se relancera automatiquement lors de la modification des fichiers TypeScript et compilera les fichiers SCSS.

```bash
npm run dev:watch
```

L'application sera accessible à l'adresse `http://localhost:3000`.

-----

## Structure du projet

L'architecture du projet est organisée comme suit :

  * **`controllers/`** : Logique de traitement des requêtes HTTP et de formulation des réponses.
  * **`models/`** : Définition des classes et interfaces représentant les entités de l'application (Dinosaur, User, etc.).
      * **`validator/`** : Schémas de validation avec Zod.
      * **`views/`** : Classes de vue pour les modèles.
  * **`repositories/`** : Gestion de l'accès et de la manipulation des données en base pour chaque modèle.
  * **`routes/`** : Définition des points d'accès de l'API et liaison avec les contrôleurs.
  * **`views/`** : Fichiers de templates EJS pour la génération des pages HTML.
      * **`elements/`** : Composants réutilisables.
      * **`pages/`** : Vues principales de l'application.
      * **`partials/`** : Fragments de code EJS (header, footer, etc.).
  * **`public/`** : Ressources statiques (CSS, images, polices).
  * **`src/scss/`** : Code source des feuilles de style en SCSS.
  * **`libs/`** : Modules et services utilitaires (connexion BDD, authentification, etc.).
  * **`middlewares/`** : Middlewares Express, incluant la vérification de l'authentification.
