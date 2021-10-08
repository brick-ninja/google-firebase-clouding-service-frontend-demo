// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
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

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
