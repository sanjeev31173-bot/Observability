<script>
  export let rows = [];

  let page = 1;
  let rowsPerPage = 15;
  let selectedOption = 15;
  let customValue = "";

  const pageOptions = [15, 50, 100, "Custom"];

  /* DERIVED VALUES */
  $: totalRows = rows.length;
  $: totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  /* 👇 VERY IMPORTANT: clamp page when rowsPerPage changes */
  $: if (page > totalPages) {
    page = totalPages;
  }

  $: start = (page - 1) * rowsPerPage;
  $: end = start + rowsPerPage;
  $: visibleRows = rows.slice(start, end);

  function statusClass(type) {
    if (type === "success") return "success";
    if (type === "error") return "error";
    return "";
  }

  function totalColor(total) {
    const value = parseInt(total);
    if (value > 1000) return "slow";
    if (value > 300) return "medium";
    return "fast";
  }

  function prev() {
    if (page > 1) page--;
  }

  function next() {
    if (page < totalPages) page++;
  }

  function handleRowsChange(e) {
    selectedOption = e.target.value;

    if (selectedOption === "Custom") {
      customValue = "";
    } else {
      rowsPerPage = Number(selectedOption);
      page = 1; // reset to first page
    }
  }

  function applyCustom() {
    const val = Number(customValue);
    if (val > 0) {
      rowsPerPage = val;
      page = 1; // reset page
    }
  }
</script>

<div class="table">
  <!-- HEADER -->
  <div class="row header">
    <div>NETWORK CALLS MADE</div>
    <div>STATUS</div>
    <div>START TIME</div>
    <div>END TIME</div>
    <div class="right">TOTAL TIME</div>
  </div>

  <!-- ROWS -->
  {#each visibleRows as row}
    <div class="row">
      <div class="api">
        <span class="method">{row.method}</span>
        <span class="endpoint">{row.endpoint}</span>
      </div>

      <div class="status {statusClass(row.statusType)}">
        {row.status}
      </div>

      <div class="time">{row.startTime}</div>
      <div class="time">{row.endTime}</div>

      <div class="right total {totalColor(row.total)}">
        {row.total}
      </div>
    </div>
  {/each}

  <!-- FOOTER -->
  <div class="footer">
    <div class="info">
      Showing {Math.min(start + 1, totalRows)}–{Math.min(end, totalRows)} of {totalRows} calls
    </div>

    <div class="controls">
      <span>Rows per page:</span>

      <select on:change={handleRowsChange} bind:value={selectedOption}>
        {#each pageOptions as opt}
          <option value={opt}>{opt}</option>
        {/each}
      </select>

      {#if selectedOption === "Custom"}
        <input
          type="number"
          min="1"
          placeholder="Custom"
          bind:value={customValue}
          on:keydown={(e) => e.key === "Enter" && applyCustom()}
        />
      {/if}

      <button on:click={prev} disabled={page === 1}>‹</button>
      <button on:click={next} disabled={page === totalPages}>›</button>
    </div>
  </div>
</div>

<style>
  .table {
    border: 1px solid #1c2430;
    border-radius: 14px;
    overflow: hidden;
    background: #0e131a;
  }

  .row {
    display: grid;
    grid-template-columns: 3fr 1.2fr 1.4fr 1.4fr 1fr;
    padding: 14px 16px;
    border-bottom: 1px solid #1c2430;
    font-size: 14px;
    color: #e5e7eb;
    align-items: center;
  }

  .header {
    background: #0b0f14;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: #94a3b8;
  }

  .api {
    display: flex;
    gap: 8px;
    font-weight: 600;
  }

  .method {
    color: #ffffff;
  }

  .endpoint {
    color: #93c5fd;
  }

  .status {
    padding: 4px 10px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 13px;
    width: fit-content;
  }

  .status.success {
    color: #22c55e;
    border: 1px solid #22c55e55;
  }

  .status.error {
    color: #ef4444;
    border: 1px solid #ef444455;
  }

  .time {
    color: #cbd5f5;
  }

  .right {
    text-align: right;
    font-weight: 600;
  }

  .total.fast {
    color: #3b82f6;
  }

  .total.medium {
    color: #f97316;
  }

  .total.slow {
    color: #f97316;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 16px;
    font-size: 14px;
    color: #94a3b8;
    background: #0b0f14;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  select,
  input {
    background: #0e1622;
    color: white;
    border: 1px solid #1c2430;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 14px;
  }

  input {
    width: 70px;
  }

  button {
    background: transparent;
    border: 1px solid #1c2430;
    color: white;
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
</style>
