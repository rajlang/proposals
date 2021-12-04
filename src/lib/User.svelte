<script>
  import { fade } from "svelte/transition";

  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateEmail,
    updateProfile,
  } from "firebase/auth";
  import { firebaseConfig } from "./config";

  import Auth from "./Auth.svelte";

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  let user = auth.currentUser;

  onAuthStateChanged(auth, (newUser) => {
    if (newUser) {
      user = newUser;
    } else {
      user = null;
    }
  });

  function verifyEmail() {
    sendEmailVerification(user)
      .then(() => {
        notify("Email sent. Please check your inbox.");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function signOut() {
    auth
      .signOut()
      .then(() => {
        notify("Signed out successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function resetPassword() {
    sendPasswordResetEmail(auth, prompt("Your Email:"))
      .then((_) => {
        // Email sent.
        notify("Password reset email sent! Please check your inbox.");
      })
      .catch((err) => {
        // An error happened.
        console.error(err);
      });
  }

  function changeEmail() {
    const newEmail = prompt("Enter new email");
    updateEmail(user, newEmail)
      .then((_) => {
        // Email updated.
        notify("Email updated sucessfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
      })
      .catch((err) => {
        if (err.code === "auth/requires-recent-login") {
          let conformation =
            confirm(
              "You need to reauthenticate before deleting your account. \n so kindly sign in again"
            ) && confirm("Click yes to sign out and sign in again");
          if (conformation) {
            signOut();
          }
        } else {
          console.error(err);
        }
      });
  }

  function changeUsername() {
    const displayName = prompt("Enter new username");
    updateProfile(user, { displayName })
      .then((_) => {
        // Username updated.
        notify("Username updated sucessfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1e3);
      })
      .catch((err) => {
        if (err.code === "auth/requires-recent-login") {
          let conformation =
            confirm(
              "You need to reauthenticate before deleting your account. \n so kindly sign in again"
            ) && confirm("Click yes to sign out and sign in again");
          if (conformation) {
            signOut();
          }
        } else {
          console.error(err);
        }
      });
  }

  function deleteAccount() {
    let confirrmation =
      confirm("Are you sure you want to delete your account?") &&
      prompt(`Please type "${user.email}" without quotes to confirm`) ===
        user.email;
    if (confirrmation) {
      user
        .delete()
        .then(() => {
          notify("Account deleted successfully.");
          setTimeout(() => {
            window.location.reload();
          }, 1e3);
        })
        .catch((err) => {
          if (err.code === "auth/requires-recent-login") {
            let conformation =
              confirm(
                "You need to reauthenticate before deleting your account \n so kindly sign in again"
              ) && confirm("Click yes to sign out to sign in again");
            if (conformation) {
              signOut();
            }
          } else {
            console.error(err);
          }
        });
    }
  }

  let message;

  function notify(msg) {
    message = msg;
    setTimeout(() => {
      message = null;
    }, 5e3);
  }
</script>

<div>
  {#if user}
    <div class="profile" transition:fade={{ duration: 300 }}>
      <h1>
        Hello {user.displayName}!
        {(() => {
          document.title = user.displayName + " - Profile | Raj Lang";
          return "";
        })()}
      </h1>
      <div class="profile-card">
        <div class="profile-avatar">
          <img
            src={user.photoURL ||
              `https://avatars.dicebear.com/api/jdenticon/${user.displayName}.svg`}
            alt={`${user.displayName}'s Profile Pic`}
          />
        </div>
        <div class="profile-info">
          <h2 class="profile-name">{user.displayName}</h2>
          <p class="profile-email">
            {user.email}
            {#if user.emailVerified}
              <div class="profile-email-verified">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <linearGradient
                    id="a"
                    x1="10.4"
                    x2="37.9"
                    y1="-572.4"
                    y2="-599.9"
                    gradientTransform="matrix(1 0 0 -1 0 -562)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#75daff" />
                    <stop offset="1" stop-color="#1ea2e4" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M26.3 4.6 28.8 6h2.9c1.6 0 3.2 1 4 2.4l1.5 2.4 2.4 1.5c1.5.8 2.3 2.4 2.4 4v2.9l1.4 2.5c.8 1.4.8 3.2 0 4.6L42 28.8v2.9c0 1.6-1 3.2-2.4 4l-2.4 1.5-1.5 2.4a4.8 4.8 0 0 1-4 2.4h-2.9l-2.5 1.4c-1.4.8-3.2.8-4.6 0L19.2 42h-2.9c-1.6 0-3.2-1-4-2.4l-1.5-2.4-2.4-1.5a4.8 4.8 0 0 1-2.4-4v-2.9l-1.4-2.5a4.8 4.8 0 0 1 0-4.6L6 19.2v-2.9c0-1.6 1-3.2 2.4-4l2.4-1.5 1.5-2.4a4.8 4.8 0 0 1 4-2.4h2.9l2.5-1.4c1.4-.8 3.2-.8 4.6 0z"
                  />
                  <path
                    d="M32.2 16.2 22 26.3l-5.2-5.1a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 0 0 2.8l8 8c.8.8 2 .8 2.8 0l13-13c.8-.8.8-2 0-2.8L35 16.2a2 2 0 0 0-2.8 0z"
                    opacity=".1"
                  />
                  <path
                    d="m21 33-8-8c-.6-.5-.6-1.5 0-2l1.4-1.5c.5-.6 1.5-.6 2 0l5.6 5.6 10.5-10.6c.6-.6 1.6-.6 2.1 0l1.5 1.4c.5.6.5 1.6 0 2.2L23 33c-.6.5-1.6.5-2.2 0z"
                    opacity=".1"
                  />
                  <path
                    fill="#fff"
                    d="m21.3 32.7-8-8a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 0 1 1.4 0l5.9 5.9 10.9-11a1 1 0 0 1 1.4 0l1.4 1.5c.4.4.4 1 0 1.4l-13 13a1 1 0 0 1-1.4 0z"
                  />
                </svg>
              </div>
            {:else}
              <div
                class="profile-email-not-verified"
                on:mousedown={verifyEmail}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <linearGradient
                    id="a"
                    x1="9.9"
                    x2="38.1"
                    y1="9.9"
                    y2="38.1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ffda1c" />
                    <stop offset="1" stop-color="#feb705" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M44 24a20 20 0 1 1-40 0 20 20 0 0 1 40 0z"
                  />
                  <radialGradient
                    id="b"
                    cx="18.2"
                    cy="13.8"
                    r="22.4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#4b4b4b" /><stop
                      offset=".5"
                      stop-color="#393939"
                    />
                    <stop offset="1" stop-color="#252525" />
                  </radialGradient>
                  <path
                    fill="url(#b)"
                    d="M24 34c-.7 0-1.3-.2-1.8-.7a2 2 0 0 1-.7-1.6c0-.6.2-1.2.7-1.6.5-.4 1-.6 1.8-.6.7 0 1.3.2 1.8.6.5.4.7 1 .7 1.6 0 .7-.2 1.2-.7 1.7s-1 .6-1.8.6zm2.2-19.3L25.8 27c0 .4-.4.7-.7.7h-2.2a.7.7 0 0 1-.7-.7l-.5-12.2c0-.4.3-.7.7-.7h3.1c.4 0 .8.3.7.7z"
                  />
                </svg>
              </div>
            {/if}
          </p>
        </div>
      </div>
      <div class="profile-settings">
        <div class="profile-simple-settings">
          <button on:click={signOut}>Sign Out</button>
          <button on:click={resetPassword}>Forgot Password</button>
          <button on:click={changeEmail}>Change Email</button>
          <button on:click={changeUsername}>Change Username</button>
        </div>
        <div class="profile-danger-settings">
          <button on:click={deleteAccount}> Delete Account </button>
        </div>
      </div>
    </div>
  {:else}
    <div transition:fade={{ duration: 300 }}>
      <h2>Sign In | Sign Up</h2>
      {(() => {
        document.title = "Sign In | Raj Lang";
        return "";
      })()}
      <Auth />
    </div>
  {/if}
  <!-- Snakbar -->
  {#if !!message}
    <div class="snakbar-container" transition:fade={{ duration: 300 }}>
      <div class="snakbar">
        <div class="snakbar-close" on:click={(_) => (message = "")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="m4.21 4.39.08-.1a1 1 0 0 1 1.32-.08l.1.08L12 10.6l6.3-6.3a1 1 0 1 1 1.4 1.42L13.42 12l6.3 6.3a1 1 0 0 1 .08 1.31l-.08.1a1 1 0 0 1-1.32.08l-.1-.08L12 13.4l-6.3 6.3a1 1 0 0 1-1.4-1.42L10.58 12l-6.3-6.3a1 1 0 0 1-.08-1.31l.08-.1-.08.1Z"
            />
          </svg>
        </div>
        <div class="snakbar-content">
          {message}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .profile {
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 1rem;
  }

  .profile-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 0.5rem;
    gap: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }

  .profile-avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .profile-avatar img {
    object-fit: cover;
    width: 100%;
  }

  .profile-info {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .profile-name {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .profile-email {
    font-size: 1rem;
    font-weight: normal;
  }

  .profile-email div {
    display: inline-block;
    position: relative;
  }

  .profile-email div > svg {
    width: 1.25rem;
    vertical-align: middle;
  }

  .profile-email div::after {
    position: absolute;
    width: max-content;
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem;
    border-radius: 0.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
    left: 100%;
    transform: scale(0);
    text-align: center;
  }

  .profile-email div:hover::after {
    transform: scale(1);
    transition: 0.3s;
  }

  .profile-email-verified::after {
    content: "Email Verified";
    background-color: blueviolet;
  }

  .profile-email-not-verified::after {
    content: "Email not Verified Please click here to verify";
    background-color: red;
  }

  .profile-settings {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .profile-simple-settings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .profile-danger-settings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .profile-settings button {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }

  .profile-simple-settings button {
    background-color: rebeccapurple;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: 0.3s;
  }

  .profile-simple-settings button:hover {
    background-color: purple;
    color: #fff;
    transition: 0.3s;
  }

  .profile-danger-settings button {
    background-color: red;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    transition: 0.3s;
  }

  .profile-danger-settings button:hover {
    background-color: darkred;
    color: #fff;
    transition: 0.3s;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .snakbar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .snakbar {
    position: relative;
    width: auto;
    height: auto;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  }

  .snakbar-close {
    width: 1rem;
    float: right;
    cursor: pointer;
  }

  .snakbar-content {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    text-align: center;
  }

  .snakbar-container .snakbar {
    transform: translateY(1rem);
    transition: 0.3s;
  }
</style>
