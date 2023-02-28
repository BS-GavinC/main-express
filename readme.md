# Recap étapes

## Initialisation du projet
- créer un fichier app.js
- npm init → créer le package.json avec les infos projet + dépendances

## Ajout des premières dépendances (lib)
### Outils de dev
- nodemon
### WebServer Express
- express
- express-async-errors
### Gestion des variables d'environnement
- dotenv
### DB (Sql Server)
- sequelize
- tedious

## Créer le fichier gitignore
- ignorer node_modules + fichiers env
- si extension gitignore installée → Ctrl + Maj + P (F1) → add gitignore -> node

## Ajouter dans les scripts :
- "dev" : "nodemon app.js"
## Créer l'architecture de base du projet + Créer le fichier .env
ExpressAPIMusic  <br>
├── controllers/  <br> 
├── dto/  <br> 
├── middlewares/  <br> 
├── models/  <br> 
├── routes/  <br> 
├── services/  <br> 
├── .env  <br> 
├── .gitignore  <br>
├── app.js  <br> 
├── package-lock.json  <br> 
├── package.json  <br> 

## Mise en place des controllers et des routers
ExpressAPIMusic  <br> 
├── controllers/  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.controller.js  <br> 
├── dto/  <br> 
├── middlewares/  <br> 
├── models/  <br> 
├── routes/  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── index.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.router.js  <br> 
├── services/  <br> 
├── .env  <br> 
├── .gitignore  <br> 
├── app.js  <br> 
├── package-lock.json  <br> 
├── package.json  <br> 

## Ajout du router dans l'app

## Création de la DB sur SSMS + Attribution des droits à notre User

## Ajouter dans le .env les infos DB

## Setup DB
- Création du index.js avec instance de sequelize et objet db + liaison modèle + relations
- Création de tous les modèles
- Nouvelle arborescence
ExpressAPIMusic  <br> 
├── controllers/  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.controller.js  <br> 
├── dto/  <br> 
├── middlewares/  <br> 
├── models/  <br>
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.model.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.model.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.model.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── index.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.model.js  <br>
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mm_artist_track.model.js  <br> 
├── routes/  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── index.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.router.js  <br> 
├── services/  <br> 
├── .env  <br> 
├── .gitignore  <br> 
├── app.js  <br> 
├── package-lock.json  <br> 
├── package.json  <br> 

- Connection db + synchro dans app.js

## Création des Services, DTO et méthodes controller
- Création du index.js avec instance de sequelize et objet db + liaison modèle + relations
- Création de tous les modèles
- Nouvelle arborescence<br>
ExpressAPIMusic  <br> 
├── controllers/  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.controller.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.controller.js  <br> 
├── dto/ <br>
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.dto.js  <br>  
├── middlewares/  <br> 
├── models/  <br>
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.model.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.model.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.model.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── index.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.model.js  <br>
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── mm_artist_track.model.js  <br> 
├── routes/  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── album.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── artist.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.router.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── index.js  <br> 
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── track.router.js  <br> 
├── services/  <br>
&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── genre.service.js  <br> 
├── .env  <br> 
├── .gitignore  <br> 
├── app.js  <br> 
├── package-lock.json  <br> 
├── package.json  <br> 

## Ajout de l'utils SuccessResponse
- Permet d'envoyer comme response, le resultat, le count (si tableau) et le statusCode

## Ajout d'une pagination
- Dans un controller (pour comprendre comment ça fonctionne)
- Mise en place d'un middleware pour la pagination

## Mise en place User
- Création model et lien Many to Many
- Création service + DTO
- Création UserController (GetAll, GetById, Update, Delete) et AuthController (Register, Login)
- Création routes
- Hashage Password et Verif Password au login (npm i argon2)

## Rework des Tracks 
### Insertion 
- Rajouter le genre
- Rajouter les albums qui lui sont liés
- Rajouter les artists qui lui sont liés (en featuring ou pas)
### Récupération
- Rajouter le genre sur les tracks récupérées
- Rajouter les albums sur lesquels sont la track
- Rajouter les artists qui ont participé à la track