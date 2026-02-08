<script>
  import { createEventDispatcher } from "svelte";

  import KpiCard from "../lib/kpiCard.svelte";
  import DashboardHeader from "../lib/dashBoardHeader.svelte";
  import ApiTable from "../lib/ApiTable.svelte";
  import { apiTableData } from "../constants/apiTableData";

  const dispatch = createEventDispatcher();

  /* ---------- STATE ---------- */
  let timeRange = "30m";
  let loading = false;

  /* ---------- TIME RANGES ---------- */
  const ranges = [
    { label: "Last 5 Min", value: "5m" },
    { label: "Last 30 Min", value: "30m" },
    { label: "Last 1 Hour", value: "1h" },
    { label: "Last 24 Hour", value: "24h" }
  ];

  function refresh() {
    console.log("Refresh clicked");
  }

  /* ---------- SAFE DATA ---------- */
  $: safeData = Array.isArray(apiTableData) ? apiTableData : [];

  $: totalApis = safeData.length;

  $: successCount =
    safeData.filter(r => r?.statusType === "success").length;

  $: errorCount =
    safeData.filter(r => r?.statusType === "error").length;

  $: successRate =
    totalApis ? ((successCount / totalApis) * 100).toFixed(1) : "0";

  $: errorRate =
    totalApis ? ((errorCount / totalApis) * 100).toFixed(1) : "0";

  function parseTimeToMs(value) {
    if (!value) return 0;

    if (value.includes("ms"))
      return parseFloat(value.replace("ms", ""));

    if (value.includes("s"))
      return parseFloat(value.replace("s", "")) * 1000;

    return 0;
  }

  $: avgResponse =
    totalApis
      ? (
          safeData.reduce(
            (sum, r) => sum + parseTimeToMs(r?.total),
            0
          ) / totalApis
        ).toFixed(0)
      : "0";

  /* ---------- NAV EVENTS ---------- */

  function gotoNetworkPage(row) {
    console.log("Network clicked", row);
  }

  function gotoDbPage(row) {
    if (!row) return;
    dispatch("onDbClick", row);
  }

  function gotoPerformancePage(row) {
    if (!row) return;
    dispatch("onPerformanceClick", row);
  }
</script>

<style>
.dashboard {
  padding: 24px;
  background: #0b1220;
  min-height: 100vh;
  color: white;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>

<div class="dashboard">

  <!-- HEADER -->
  <DashboardHeader
    bind:timeRange
    {ranges}
    {loading}
    onRefresh={refresh}
  />

  <!-- KPI CARDS -->
  <div class="cards">
    <KpiCard title="Total APIs" value={totalApis} />
    <KpiCard title="Avg Response Time" value={`${avgResponse} ms`} />
    <KpiCard title="Success Rate" value={`${successRate}%`} />
    <KpiCard title="Error Rate" value={`${errorRate}%`} />
  </div>

  <!-- TABLE -->
  <ApiTable
    data={safeData}
    on:apiClick={(e) => gotoPerformancePage(e.detail)}
    on:dbClick={(e) => gotoDbPage(e.detail)}
    on:networkClick={(e) => gotoNetworkPage(e.detail)}
  />

</div>
