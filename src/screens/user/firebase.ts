// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import storage from '@react-native-firebase/storage';
// import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
// import {GoogleSignin, statusCodes} from 'react-native-google-signin';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCpOsR-Nw0CfF7xNjCBVL0Fpu-1KbENeAw',
//   authDomain: 'tarot-c1565.firebaseapp.com',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'tarot-c1565',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
//   messagingSenderId: '1053473079185',
//   appId: 'YOUR_APP_ID',
//   measurementId: 'YOUR_MEASUREMENT_ID',
// };

// if (!auth().apps.length) {
//   auth().configure(firebaseConfig);
//   firestore().settings({timestampsInSnapshots: true});
//   storage().setMaxUploadRetryTime(60000);
// }

// // Configure Facebook login
// export const loginWithFacebook = async () => {
//   try {
//     const result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//     ]);
//     if (result.isCancelled) {
//       throw new Error('User cancelled the login process');
//     }
//     const data = await AccessToken.getCurrentAccessToken();
//     if (!data) {
//       throw new Error('Something went wrong obtaining access token');
//     }
//     const facebookCredential = auth.FacebookAuthProvider.credential(
//       data.accessToken,
//     );
//     return auth().signInWithCredential(facebookCredential);
//   } catch (error) {
//     console.log(error);
//   }
// };

// // Configure Google login
// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID', // From Google Developers Console
//   offlineAccess: true,
//   forceCodeForRefreshToken: true,
// });

// export const loginWithGoogle = async () => {
//   try {
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(
//       userInfo.idToken,
//     );
//     return auth().signInWithCredential(googleCredential);
//   } catch (error) {
//     console.log(error);
//     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//       // User cancelled the login flow
//     } else if (error.code === statusCodes.IN_PROGRESS) {
//       // Operation (e.g. sign in) is in progress already
//     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//       // Play services not available or outdated
//     } else {
//       // Some other error happened
//     }
//   }
// };

// export {auth, firestore, storage};
