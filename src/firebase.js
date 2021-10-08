import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCwafEA_QnJV85Jhd5okrFNB9UlfVMXYTY",
  authDomain: "cloud-messaging-test-4040d.firebaseapp.com",
  projectId: "cloud-messaging-test-4040d",
  storageBucket: "cloud-messaging-test-4040d.appspot.com",
  messagingSenderId: "387923417310",
  appId: "1:387923417310:web:2a048b7e5348b118274a4f",
  measurementId: "G-Y70SGY8H6V"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  return messaging.getToken({vapidKey: 'BLDAKvNu0M89fO54tA-oHO9R1xu82ob-oEZEcI1Qza1G8i1JE6Ay5pPYq5LNpPCbLzgt2oaIguCfEAeUK5gm3Mg'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});