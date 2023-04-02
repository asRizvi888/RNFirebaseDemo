import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHUIA9oPnqrzll9k-i1Y_2bvPubkLeBfU',
  authDomain: 'fir-demo-6e6e0.firebaseapp.com',
  projectId: 'fir-demo-6e6e0',
  storageBucket: 'fir-demo-6e6e0.appspot.com',
  messagingSenderId: '386443729118',
  appId: '1:386443729118:web:bbe251a1d6469e619a8a4f',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase, auth};
