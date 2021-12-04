<script>
  import User from "./lib/User.svelte";
</script>

<main>
  <User />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  main {
    text-align: center;
    display: grid;
    place-items: center;
    height: 100vh;
  }
</style>
