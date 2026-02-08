<script>
  import { createEventDispatcher } from "svelte";

  export let data = [];

  const dispatch = createEventDispatcher();

  /* ---------- FILTER STATE ---------- */
  let search = "";
  let methodFilter = "ALL";
  let statusFilter = "ALL";

  /* ---------- PAGINATION ---------- */
  let currentPage = 1;
  let pageSize = 10;

  /* ---------- DROPDOWN OPTIONS ---------- */
  const methods = ["ALL", "GET", "POST", "PUT", "DELETE"];
  const statuses = ["ALL", "SUCCESS", "ERROR"];

  /* ---------- FILTER LOGIC ---------- */
  $: safeData = Array.isArray(data) ? data : [];

  $: filtered = safeData.filter(row => {
    if (!row) return false;

    const matchSearch =
      (row.endpoint || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchMethod =
      methodFilter === "ALL" || row.method === methodFilter;

    const matchStatus =
      statusFilter === "ALL" ||
      (statusFilter === "SUCCESS" && row.statusType === "success") ||
      (statusFilter === "ERROR" && row.statusType === "error");

    return matchSearch && matchMethod && matchStatus;
  });

  /* ---------- PAGINATION LOGIC ---------- */
  $: totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  $: paged = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  /* ---------- EVENTS ---------- */
  function gotoNetwork(row) {
    dispatch("networkClick", row);
  }

  function gotoDb(row) {
    dispatch("dbClick", row);
  }

  function gotoApi(row) {
    dispatch("apiClick", row);
  }
</script>

<style>
.table-wrapper {
  margin-top: 30px;
  background: #111c2d;
  border-radius: 14px;
  border: 1px solid #1e2a40;
  overflow: hidden;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  padding: 18px;
  border-bottom: 1px solid #1e2a40;
}

input {
  background: #0b1220;
  border: 1px solid #1e2a40;
  padding: 10px;
  border-radius: 8px;
  color: white;
  width: 300px;
}

select {
  background: #0b1220;
  border: 1px solid #1e2a40;
  padding: 10px;
  border-radius: 8px;
  color: white;
  margin-left: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 14px;
  text-align: left;
  border-bottom: 1px solid #1e2a40;
}

th {
  color: #7f9cc9;
  font-size: 13px;
}

.link {
  color: #3b82f6;
  cursor: pointer;
  text-decoration: underline;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;
}

button {
  background: #2563eb;
  border: none;
  padding: 8px 14px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.method-badge {
  background: rgba(37, 99, 235, 0.15);
  color: #3b82f6;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.status-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot.success { background: #22c55e; }
.status-dot.error { background: #ef4444; }

.status-text.success {
  color: #22c55e;
  font-weight: 600;
}

.status-text.error {
  color: #ef4444;
  font-weight: 600;
}
</style>

<div class="table-wrapper">

  <!-- TOOLBAR -->
  <div class="toolbar">
    <input placeholder="Search endpoint..." bind:value={search} />

    <div>
      <select bind:value={methodFilter}>
        {#each methods as m}
          <option value={m}>{m}</option>
        {/each}
      </select>

      <select bind:value={statusFilter}>
        {#each statuses as s}
          <option value={s}>{s}</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- TABLE -->
  <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Endpoint</th>
        <th>Method</th>
        <th>Status</th>
        <th>Wait</th>
        <th>Compute</th>
        <th>Network</th>
        <th>Total</th>
        <th>DB Calls</th>
        <th>Time</th>
      </tr>
    </thead>

    <tbody>
      {#each paged as row}
        <tr>
          <td>{row.id}</td>

          <!-- ⭐ PERFORMANCE CLICK -->
          <td class="link" on:click={() => gotoApi(row)}>
            {row.endpoint}
          </td>

          <td>
            <span class="method-badge">{row.method}</span>
          </td>

          <td>
            <div class="status-cell">
              <span class={`status-dot ${row.statusType}`}></span>
              <span class={`status-text ${row.statusType}`}>
                {row.status}
              </span>
            </div>
          </td>

          <td>{row.wait}</td>
          <td>{row.compute}</td>

          <td class="link" on:click={() => gotoNetwork(row)}>
            {row.network}
          </td>

          <td>{row.total}</td>

          <!-- ⭐ DB CLICK -->
          <td class="link" on:click={() => gotoDb(row)}>
            {row.dbCalls}
          </td>

          <td>{row.time}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <!-- PAGINATION -->
  <div class="pagination">
    <button disabled={currentPage === 1} on:click={() => currentPage--}>
      Prev
    </button>

    <span>{currentPage} / {totalPages}</span>

    <button disabled={currentPage === totalPages} on:click={() => currentPage++}>
      Next
    </button>
  </div>

</div>
