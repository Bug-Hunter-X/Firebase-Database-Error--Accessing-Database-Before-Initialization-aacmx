The Firebase SDK may throw an error if you attempt to access a database reference before the connection to Firebase has been fully established.  This can occur when you try to read or write data in the `initializeApp` function's callback or before the promise resolves.  For example:

```javascript
firebase.initializeApp(firebaseConfig);

//This will likely throw an error because the database isn't ready yet
firebase.database().ref('/somepath').once('value').then(snapshot => {
  console.log(snapshot.val());
});
```