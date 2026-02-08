<script>
  export let title = "";
  export let value = "";
  export let subtitle = "";
  export let subtitleType = "normal"; // positive | negative | normal
</script>

<style>
  .card {
    background: #111c2d;
    border-radius: 14px;
    padding: 20px;
    border: 1px solid #1e2a40;
  }

  h4 {
    color: #9fb3d9;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .value {
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .positive { color: #22c55e; }
  .negative { color: #ef4444; }
  .normal { color: #9fb3d9; }
</style>

<div class="card">
  <h4>{title}</h4>
  <div class="value">{value}</div>
  <div class={subtitleType}>{subtitle}</div>
</div>
