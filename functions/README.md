# Tests How-To

Before run tests you should create service account and download credentials to .json file, then update `firebaseAdmin.js`

1. Ensure that you run emulator suite (from project root `./diet-routine`)

        firebase emulators:start

2. Run tests in the second terminal (from `./diet-routine/functions`)

        npm run test

Tests should runs using the local firebase emulator

## Work with emulator

https://firebase.google.com/docs/emulator-suite/connect_firestore?authuser=0

## Manual running tests

From project root (!) runs:

    firebase emulators:start

To use firestore emulator in your tests, you should export env variable:

    export FIRESTORE_EMULATOR_HOST="localhost:8080"

Then you can run tests:

    npx jest

## Other useful commands

You can export stored data:

    firebase emulators:export ./.dir

You can check if env set:

    echo $FIRESTORE_EMULATOR_HOST

You can remove env via:

    unset FIRESTORE_EMULATOR_HOST
