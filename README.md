# Création d'une API REST/GraphQL avec RxDB

## Description

Ce projet a été réalisé dans le cadre du TP d’Architecture Orientée Service.

L’objectif principal est de développer une application Node.js permettant la gestion des utilisateurs et des devices à travers :

- une API REST,
- une API GraphQL,
- une base de données locale utilisant RxDB.

Les données sont stockées sous forme de documents JSON et sont accessibles à la fois via REST et GraphQL.

---

# Technologies utilisées

- Node.js
- Express.js
- GraphQL
- graphql-http
- RxDB
- RxJS
- LokiJS

---

# Fonctionnalités

## Gestion des utilisateurs

### REST API
- Ajouter un utilisateur
- Afficher tous les utilisateurs
- Afficher un utilisateur par ID
- Modifier un utilisateur
- Supprimer un utilisateur

### GraphQL API
- Query users
- Query user(id)
- Mutation addUser
- Mutation updateUser
- Mutation deleteUser

---

## Gestion des devices

Chaque utilisateur peut posséder plusieurs devices.

### Types de devices
- laptop
- smartphone
- tablet
- server

### États possibles
- active
- inactive
- maintenance

### Fonctionnalités
- CRUD complet des devices
- Relation User → Device
- Suppression automatique des devices lors de la suppression d’un utilisateur
- Validation qu’un device ne peut pas exister sans utilisateur

---

# Structure du projet

```plaintext
api-rest-graphql-rxdb/
│
├── data/
│
├── routes/
│   ├── userRoutes.js
│   └── deviceRoutes.js
│
├── resolvers/
│   ├── userResolver.js
│   └── deviceResolver.js
│
├── services/
│   ├── userService.js
│   └── deviceService.js
│
├── schema/
│   └── schema.gql
│
├── db/
│   └── db.js
│
├── server.js
├── package.json
└── README.md
