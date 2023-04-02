import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

// configure providers

GoogleSignin.configure({
  webClientId:
    '386443729118-g3k4ol3fie5f3h1u5l90cr6qdkgl4ogg.apps.googleusercontent.com',
});

// SignOut functionality
export function signOut() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

// sign in with google
export async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
