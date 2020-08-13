# diet-routine
Food Diary Web Application. Allows you to keep track of calories, and adhere to the selected diet.

## Quickstart for Developers

1. Clone project
1. Change branch to `starter-kit`
1. Install Firebase CLI with emulators - [see more](https://firebase.google.com/docs/emulator-suite/install_and_configure)
1. Login

        firebase login

1. Init Firebase project with exist project `diet-routine`. *Refuse to offer to replace any files during the wizard - [see more](https://github.com/Glajik/diet-routine/issues/13)*

        firebase init

1. Install dependencies
1. Go to `web-client` folder
1. Install dependencies for client (via `yarn`, not `npm`)
1. Build client
1. Go back to project root folder
1. Try to start hosting emulator - [see more](https://firebase.google.com/docs/rules/emulator-setup#install_the)

        firebase serve

Should work ;)

### Project structure

```TEXT
diet-routine/
├── functions/ <----------- Backend - Cloud functions folder
|   ├── node_modules/
|   ├── .eslint.json
|   ├── .gitignore
|   ├── index.js
|   ├── package.json
|   └── package-lock.json
|
├── web-client/ <---------- Frontend - Web app folder
|   ├── build/ <----------- Production build
│   ├── node_modules/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   |    ├── App.css
│   |    ├── App.js
│   |    ├── App.test.js
│   |    ├── index.css
│   |    ├── index.js
│   |    ├── logo.svg
│   |    ├── serviceWorker.js
│   |    └── setupTests.js
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
|
├── .firebaserc
├── .gitignore
├── database.rules.json
├── firebase.json <---------- Firebase configuration file
├── firestore.rules
├── firestore.indexes.json
├── LICENSE
├── README.md
└── storage.rules
```
