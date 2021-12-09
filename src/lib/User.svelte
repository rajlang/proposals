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

  import { propose, getProposals } from "./firestore";

  window["firestore"] = {
    propose,
    getProposals,
  };

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
    }, 10e3);
  }
</script>

<div>
  {#if user}
    <div class="flex flex-col gap-10" transition:fade={{ duration: 300 }}>
      <div
        class="card items-center shadow-2xl compact side bg-gradient-to-r from-green-400 to-blue-500 overflow-visible"
      >
        <div class="flex-row items-center space-x-4 card-body">
          <div>
            <div class="avatar">
              <div
                class="rounded-full w-24 h-24 ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <img
                  src={user.photoURL ||
                    `https://avatars.dicebear.com/api/jdenticon/${user.displayName}.svg`}
                  alt={`${user.displayName}'s Profile Pic`}
                />
              </div>
            </div>
          </div>
          <div class="divider divider-vertical" />
          <div>
            <h2 class="card-title">{user.displayName}</h2>
            <p class="text-base-content text-opacity-40">
              {user.email}
              {#if user.emailVerified}
                <span
                  data-tip="✔️ Verified Email"
                  class="tooltip badge badge-xs bg-success tooltip-success tooltip-right"
                />
              {:else}
                <span
                  data-tip="⚠️ Email Not Verified"
                  class="tooltip badge badge-xs bg-error tooltip-error tooltip-right"
                />
              {/if}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-10">
        <div class="flex flex-col gap-3">
          <button class="btn btn-primary" on:click={signOut}> Sign Out </button>
          <button class="btn btn-primary" on:click={changeEmail}>
            Change Email
          </button>
          <button class="btn btn-primary" on:click={changeUsername}>
            Change Username
          </button>
        </div>
        <div class="flex flex-col gap-3 self-center">
          {#if !user.emailVerified}
            <button class="btn btn-primary" on:click={verifyEmail}>
              Verify Email
            </button>
          {/if}
          <button class="btn bg-warning" on:click={resetPassword}>
            Forgot Password
          </button>
          <button class="btn bg-error" on:click={deleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  {:else}
    <div transition:fade={{ duration: 300 }}>
      <Auth />
    </div>
  {/if}
  <!-- Notification -->
  {#if !!message}
    <div
      class="absolute inset-0 grid place-items-center bg-black bg-opacity-50"
    >
      <div class="alert w-max shadow-lg" transition:fade={{ duration: 300 }}>
        <div class="flex-1 justify-between gap-5">
          <p class="">
            {message}
          </p>
          <button class="" on:click={(_) => (message = "")}> ❌ </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- <style>
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
</style> -->
