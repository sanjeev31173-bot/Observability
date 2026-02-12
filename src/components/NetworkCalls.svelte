<script>
  export let api = "/api/v1/data";
</script>

<div class="network-calls">
  <!-- separator line below top bar -->
  <div class="separator"></div>

  <div class="content">
    <div class="label">NETWORK CALLS</div>
    <div class="api">{api}</div>
  </div>
</div>

<style>
  .network-calls {
    width: 100%;
  }

  .separator {
    height: 1px;
    background: #1c2430;
    margin-bottom: 18px;
  }

  .content {
    padding: 0 24px;
  }

  .label {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #94a3b8; /* not white, professional */
    margin-bottom: 14px;
  }

  .api {
    font-size: 28px;
    font-weight: 700;
    color: #1f9cff;
  }
</style>
