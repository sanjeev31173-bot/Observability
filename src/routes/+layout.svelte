<script>
  /* Layout should NOT have logic */
</script>

<div class="app">
  <main class="content">
    <slot />
  </main>
</div>

<style>
  .app {
    min-height: 100vh;
    background: linear-gradient(to bottom, #0b0f14, #05070a);
  }

  .content {
    min-height: 100vh;
  }
</style>
