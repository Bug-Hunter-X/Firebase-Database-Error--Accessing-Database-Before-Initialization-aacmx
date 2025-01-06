The solution is to perform database operations within the `.then()` block of the `initializeApp()` promise:

```javascript
firebase.initializeApp(firebaseConfig).then(() => {
  // Access the database here. The connection is now guaranteed to be established.
  firebase.database().ref('/somepath').once('value').then(snapshot => {
    console.log(snapshot.val());
  }).catch(error => {
    console.error('Error reading data:', error);
  });
}).catch(error => {
  console.error('Error initializing Firebase:', error);
});
```
This ensures that the database access code only executes after the Firebase app is successfully initialized.