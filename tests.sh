#!/bin/bash

# Runs tests in emulator environment
export FIRESTORE_EMULATOR_HOST="localhost:8080"

firebase emulators:exec "cd functions && npx jest && cd .."

# firebase emulators:start exec: "./functions/tests.sh"
unset FIRESTORE_EMULATOR_HOST
