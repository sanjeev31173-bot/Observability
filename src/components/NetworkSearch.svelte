<script>
  export let value = "";
</script>

<div class="search-wrapper">
  <div class="search-box">
    <span class="icon">🔍</span>
    <input
      type="text"
      bind:value={value}
      placeholder="Search network calls..."
    />
  </div>
</div>

<style>
  .search-wrapper {
    padding: 12px 24px;
  }

  .search-box {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 50px;
    padding: 0 14px;
    border-radius: 14px;
    background: #11161c;
    border: 1px solid #1c2430;
  }

  .icon {
    color: #64748b;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 15px;
  }
</style>
