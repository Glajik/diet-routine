#!/bin/bash

# Set env variable to run Firebase Admin SDK at emulator environment
export FIRESTORE_EMULATOR_HOST="localhost:8080"

# Runs tests
npx jest

# Export database state
firebase emulators:export ../.export

# Unset env variable
unset FIRESTORE_EMULATOR_HOST
