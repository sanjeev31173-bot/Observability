<script>
  import { createEventDispatcher } from "svelte";
  import { dbQueryData } from "../constants/dbCallsData";

  export let row = null;

  const dispatch = createEventDispatcher();

  /* ---------- SAFE ENDPOINT ---------- */
  $: apiEndpoint = row?.endpoint || "Unknown API";

  /* ---------- CORRECT DB LINKING (MOST IMPORTANT FIX) ---------- */
  /* Link DB calls using queryHash NOT endpoint */

  $: dbData =
    row?.queryHash && row.queryHash.length
      ? dbQueryData.filter(db =>
          row.queryHash.includes(db.hash)
        )
      : [];

  let search = "";
  let selectedQuery = null;
  let timeRange = "1h";

  /* ---------- BACK ---------- */
  function goBack() {
    dispatch("onBack");
  }

  function selectHash(item) {
    selectedQuery = item?.query || null;
  }

  /* ---------- SEARCH FILTER ---------- */
  $: filtered = dbData.filter(d =>
    (d?.hash || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );
</script>

<style>
.page {
  padding: 24px;
  background: #0b1220;
  min-height: 100vh;
  color: white;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
}

.back {
  cursor: pointer;
  font-size: 20px;
}

.controls {
  display: flex;
  gap: 10px;
}

select, input {
  background: #111c2d;
  border: 1px solid #1e2a40;
  color: white;
  padding: 9px 12px;
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

.table-wrapper {
  margin-top: 20px;
  background: #111c2d;
  border-radius: 14px;
  border: 1px solid #1e2a40;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid #1e2a40;
}

th {
  color: #7f9cc9;
  font-size: 13px;
}

.hash {
  color: #3b82f6;
  cursor: pointer;
  font-weight: 500;
}

.time-badge {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.query-box {
  margin-top: 20px;
  background: #111c2d;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #1e2a40;
}
</style>

<div class="page">

  <!-- HEADER -->
  <div class="header">
    <div class="header-left">
      <span class="back" on:click={goBack}>←</span>
      <span>API Observability</span>
    </div>

    <div class="controls">
      <select bind:value={timeRange}>
        <option value="5m">Last 5 Min</option>
        <option value="30m">Last 30 Min</option>
        <option value="1h">Last 1 Hour</option>
        <option value="24h">Last 24 Hour</option>
      </select>

      <button>Refresh</button>
    </div>
  </div>

  <h3>DB CALLS — {apiEndpoint}</h3>

  <input
    placeholder="Search query hash"
    bind:value={search}
    style="width:100%; margin:16px 0;"
  />

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>QUERY HASH</th>
          <th>START TIME</th>
          <th>END TIME</th>
          <th>OVERALL TIME</th>
        </tr>
      </thead>

      <tbody>
        {#each filtered as item}
          <tr>
            <td
              class="hash"
              on:click={() => selectHash(item)}
            >
              {item.hash}
            </td>

            <td>{item.start || "-"}</td>
            <td>{item.end || "-"}</td>

            <td>
              <span class="time-badge">
                {item.total || item.dbTime || "-"}
              </span>
            </td>
          </tr>
        {/each}

        {#if filtered.length === 0}
          <tr>
            <td colspan="4">No DB Calls Found</td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>

  {#if selectedQuery}
    <div class="query-box">
      <b>Query:</b>
      <p>{selectedQuery}</p>
    </div>
  {/if}

</div>
