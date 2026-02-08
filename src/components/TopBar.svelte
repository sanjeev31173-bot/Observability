<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let selectedTime = "Last 1h";
  let open = false;

  const times = ["Last 15m", "Last 30m", "Last 1h", "Last 1d", "Last 1w"];

  function toggle() {
    open = !open;
  }

  function selectTime(time) {
    selectedTime = time;
    open = false;
  }

  function refresh() {
    dispatch("refresh");
  }
</script>

<div class="topbar">
  <div class="title">API Observability</div>

  <div class="right">
    <button class="refresh" on:click={refresh}>⟳ Refresh</button>

    <div class="dropdown">
      <button class="time" on:click={toggle}>
        🕒 {selectedTime} ▾
      </button>

      {#if open}
        <div class="menu">
          {#each times as time}
            <div
              class:selected={time === selectedTime}
              on:click={() => selectTime(time)}
            >
              {time}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .topbar {
    height: 64px;
    padding: 0 24px;
    background: linear-gradient(to bottom, #0b0f14, #05070a);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button {
    background: transparent;
    border: 1px solid #1c2430;
    color: white;
    padding: 8px 14px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  button:hover {
    background: #0e1622;
  }

  .time {
    color: #1f9cff;
    border-color: #1f9cff44;
  }

  .dropdown {
    position: relative;
  }

  .menu {
    position: absolute;
    top: 48px;
    right: 0;
    background: #1a1f26;
    border-radius: 14px;
    padding: 8px;
    width: 150px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  .menu div {
    padding: 10px 12px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #e5e7eb;
  }

  .menu div:hover {
    background: #2a3038;
  }

  .menu div.selected {
    background: #2a3038;
    color: #60a5fa;
    font-weight: 600;
  }
</style>
