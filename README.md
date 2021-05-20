# Projet Node.js + Express.js + Next.js + React.js
Il s'agit d'un projet [Next.js](https://nextjs.org/) démarré avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) et bibliothèque [`React.js`](https://fr.reactjs.org/) pour la partie front-end.

L'APi back-end a été construite avec [`Node.js`](https://nodejs.org/en/) et le framework [`Express.js`](http://expressjs.com/)

Next.js est un framework Web de développement front-end open-source React créé par Vercel qui permet des fonctionnalités telles que le rendu côté serveur et la génération de sites Web statiques pour les applications Web basées sur React.


## Prérequis
Pour faire fonctionner ce projet vous aurez besoin d'installer :
- [Node.js](https://nodejs.org/en/download/) - Environnement d'execution JavaScript
- [Git bash](https://git-scm.com/downloads) - Pour les utilisateurs windows
- [VS Code](https://code.visualstudio.com/) - Un éditeur de code


## Installation du projet
Clonez le projet sur votre ordinateur, ensuite éxecutez les commandes suivante :

```bash
// Installation de votre serveur back-end
cd api
npm install
# ou
yarn install

// Installation de votre serveur front-end
cd app
npm install
# ou
yarn install
```

## Démarrage du projet en mode développement
Dans la phase de développement, le serveur nodejs et l'application Next.js sont éxécutées sur des ports différents. Le serveur nodejs s'exécute sur le port 3080, l'application Next.js s'exécute sur le port 3000 à l'aide de la bibliothèque de développement [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware).


Suivez les étapes ci-dessous pour éxécuter vos serveurs de developpement:

```bash
// Lancez votre serveur back-end
cd api
npm run dev
# ou
yarn dev

// Lancez votre serveur front-end
cd app
npm run start:dev
# ou
yarn start:dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `pages/index.js`. Le fast refresh mets à jour votre page automatiquement lorsque vous modifiez le fichier.


## Mise en production via Vercel
Le moyen le plus simple de déployer votre application Next.js consiste à utiliser [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) par les créateurs de Next.js.

Consultez [Next.js deployment documentation](https://nextjs.org/docs/deployment) pour plus de détails.


## Documentation
- [Node.js](https://nodejs.org/api/) - Environnement bas niveau permettant l’exécution de JavaScript côté serveur
- [Express.js](https://expressjs.com/en/guide/routing.html) - Framework pour construire des applications web basées sur Node.js
- [Next.js](https://nextjs.org/docs) - Framework Web de développement front-end open-source  pour React
- [React.js](https://fr.reactjs.org/docs/getting-started.html) -  bibliothèque JavaScript open-source pour faciliter la création d'application web monopage
- [MaterialUI](https://material-ui.com/) - Composants React pour un développement Web plus rapide et plus facile
- [tuto NodeJS NextJS](https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-next-js-app-with-nodejs-backend-7ff91841bd3) - Ce projet a été réalisé avec cet article