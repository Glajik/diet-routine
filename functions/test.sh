#!/bin/bash

# Set env variable to run Firebase Admin SDK at emulator environment
export FIRESTORE_EMULATOR_HOST="localhost:8080"
# export FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"

# Runs tests
npx jest

# Export database state
# firebase emulators:export ../.export

# Unset env variable
unset FIRESTORE_EMULATOR_HOST
# unset FIREBASE_AUTH_EMULATOR_HOST
