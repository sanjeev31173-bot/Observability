<script>
  export let timeRange;
  export let ranges = [];
  export let loading = false;

  export let onRefresh;
</script>

<style>
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .tag {
    background: rgba(37, 99, 235, 0.15);
    color: #3b82f6;
    padding: 10px 18px;
    border-radius: 14px;
    font-size: 18px;
    font-weight: 500;
  }

  .title {
    font-size: 26px;
    font-weight: 600;
    color: white;
  }

  .right {
    display: flex;
    gap: 10px;
  }

  select {
    background: #111c2d;
    border: 1px solid #1e2a40;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
  }

  button {
    background: #2563eb;
    border: none;
    color: white;
    padding: 9px 16px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>

<div class="topbar">

  <!-- LEFT SIDE -->
  <div class="left">
    <div class="tag">monitoring</div>
    <div class="title">API Dashboard</div>
  </div>

  <!-- RIGHT SIDE -->
  <div class="right">
    <select bind:value={timeRange}>
      {#each ranges as r}
        <option value={r.value}>{r.label}</option>
      {/each}
    </select>

    <button on:click={onRefresh}>
      {loading ? "Refreshing..." : "Refresh"}
    </button>
  </div>

</div>
