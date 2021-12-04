<script context="module">
  import firebase from "firebase/compat/app";
  import * as firebaseui from "firebaseui";
  import "firebaseui/dist/firebaseui.css";

  import { firebaseConfig } from "./config";

  firebaseui.auth.AuthUI.getInstance() ||
    firebase.initializeApp(firebaseConfig);

  var uiConfig = {
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInSuccessUrl: "#0",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
      window.location.assign("<your-privacy-policy-url>");
    },
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  try {
    ui.start("#firebaseui-auth-container", uiConfig);
  } catch (err) {
    if (err.code === "firebaseui/auth-ui-already-initialized") {
      ui.reset();
      ui.start("#firebaseui-auth-container", uiConfig);
    } else {
      console.error(err);
    }
  }
</script>

<div id="firebaseui-auth-container" />
