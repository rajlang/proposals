<script>
  import { fade } from "svelte/transition";
  import {
    getAuth,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
  } from "firebase/auth";

  const auth = getAuth();

  let username, email, password;

  let confirmPassword = false;

  function signIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Signed in successfully");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          console.log("Email doesn't in our database");
        } else {
          console.error(error);
        }
      });
  }

  function signInWithGoogle(event) {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Signed in
        console.log("Signed in successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function resetPassword() {
    sendPasswordResetEmail(auth, prompt("Enter your E-Mail Address:"))
      .then(() => {
        console.log("Password reset email sent successfuly!");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          console.log("Email doesn't in our database");
        } else {
          console.error(error);
        }
      });
  }

  function signUp(event) {
    event.preventDefault();
    if (!confirmPassword) {
      console.log("Passwords doesn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            // Profile updated!
            window.location.reload();
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(error);
        console.log("errorCode: ", errorCode);
        // ..
      });
  }

  function passwordConformation(event) {
    confirmPassword = event.target.value === password;
  }

  let active = "signin";
</script>

{#if active == "signin"}
  <div
    class="p-5 md:p-10 card bg-base-200 shadow-lg"
    in:fade={{ duration: 300 }}
  >
    <h2 class="card-title uppercase">Sign In</h2>
    <form class="flex flex-col" on:submit={signIn}>
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="Enter your Email address"
          class="input input-sm md:input-md"
          required
          bind:value={email}
        />
      </div>
      <div class="form-control">
        <label class="label" for="password">
          <span class="label-text">Password</span>
        </label>
        <input
          autocomplete="current-password"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          class="input input-sm md:input-md"
          required
          minlength="8"
          bind:value={password}
        />
        <span
          class="label-text-alt btn btn-link btn-xs"
          on:mousedown={resetPassword}
        >
          Forgot Password?
        </span>
      </div>
      <button type="submit" class="btn btn-primary btn-sm md:btn-md mt-1">
        Sign In
      </button>
    </form>
    <div class="divider">OR</div>
    <form on:submit={signInWithGoogle}>
      <button type="submit" class="btn btn-primary btn-sm md:btn-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Google"
          class="inline-block w-6 h-6 mr-2"
          viewBox="0 0 512 512"
        >
          <path
            fill="#4285f4"
            d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
          />
          <path
            fill="#34a853"
            d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
          />
          <path
            fill="#fbbc02"
            d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
          />
          <path
            fill="#ea4335"
            d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
          />
        </svg>
        Sign In with Google
      </button>
    </form>
  </div>
  <button
    class="btn btn-link btn-sm md:btn-md mt-2"
    on:click={() => (active = "signup")}
  >
    You don't have an account?
  </button>
{:else}
  <div
    class="p-5 md:p-10 card bg-base-200 shadow-lg"
    in:fade={{ duration: 300 }}
  >
    <h2 class="card-title uppercase">Sign Up</h2>
    <form class="flex flex-col" on:submit={signUp}>
      <div class="form-control">
        <label class="label" for="email">
          <span class="label-text">Email</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          placeholder="Enter your Email address"
          class="input input-sm md:input-md"
          required
          bind:value={email}
        />
      </div>
      <div class="form-control">
        <label class="label" for="username">
          <span class="label-text">Name</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Create Username"
          class="input input-sm md:input-md"
          required
          bind:value={username}
        />
      </div>
      <div class="sm:flex sm:space-x-2">
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Password</span>
          </label>
          <input
            autocomplete="new-password"
            type="password"
            id="password"
            name="password"
            placeholder="Create new Password"
            class="input input-sm md:input-md"
            required
            minlength="8"
            bind:value={password}
          />
        </div>
        <div class="form-control">
          <label class="label" for="password">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            autocomplete="new-password"
            type="password"
            id="password"
            name="password"
            placeholder="Re-Enter new Password"
            class="input input-sm md:input-md"
            required
            minlength="8"
            on:blur={passwordConformation}
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-sm md:btn-md mt-3">
        Sign Up
      </button>
    </form>
    <div class="divider">OR</div>
    <form on:submit={signInWithGoogle}>
      <div class="indicator">
        <div
          class="indicator-item indicator-center badge bg-success badge-sm md:badge-md"
        >
          recommended
        </div>
        <button class="btn btn-primary btn-sm md:btn-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Google"
            class="inline-block w-6 h-6 mr-2"
            viewBox="0 0 512 512"
          >
            <path
              fill="#4285f4"
              d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
            />
            <path
              fill="#34a853"
              d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
            />
            <path
              fill="#fbbc02"
              d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
            />
            <path
              fill="#ea4335"
              d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
            />
          </svg>
          Sign Up with Google
        </button>
      </div>
    </form>
  </div>
  <button
    class="btn btn-link btn-sm md:btn-md mt-2"
    on:click={() => (active = "signin")}
  >
    You have an account?
  </button>
{/if}
