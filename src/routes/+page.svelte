<script>
  import TopBar from "../components/TopBar.svelte";
  import NetworkCalls from "../components/NetworkCalls.svelte";
  import NetworkSearch from "../components/NetworkSearch.svelte";
  import ApiCallsTable from "../components/ApiCallsTable.svelte";
  import { apiTableData } from "$lib/constants.js";

  let query = "";
  let rows = [...apiTableData];

  function refreshTable() {
    rows = apiTableData.map((row) => ({
      ...row,
      startTime: new Date().toLocaleTimeString(),
      endTime: new Date().toLocaleTimeString()
    }));
  }

  $: filteredData = rows.filter((row) =>
    row.endpoint.toLowerCase().includes(query.toLowerCase())
  );
</script>

<TopBar on:refresh={refreshTable} />

<NetworkCalls api="/api/v1/data" />

<NetworkSearch bind:value={query} />

<ApiCallsTable rows={filteredData} />
