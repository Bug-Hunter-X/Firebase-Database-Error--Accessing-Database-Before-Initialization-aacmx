# Firebase Database Access Before Initialization

This repository demonstrates a common error when working with the Firebase Realtime Database: attempting to access the database before the Firebase app has fully initialized. This often results in unexpected errors.

## The Problem
The provided `bug.js` file shows code where a database reference is accessed immediately after calling `firebase.initializeApp()`. This is problematic because the initialization is asynchronous; the database connection might not be ready.  This typically manifests as an error indicating that the database is unavailable or that a method is called on an uninitialized object.

## The Solution
The `bugSolution.js` file illustrates the correct way to handle this.  It uses the promise returned by `initializeApp()` to ensure that the database is initialized before any operations are performed.