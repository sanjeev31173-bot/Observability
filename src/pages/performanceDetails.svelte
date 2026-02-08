<script>
import { apiTableData } from "../constants/apiTableData";

export let row;
export let onBack;

/* ✅ REACTIVE ENDPOINT */
$: endpoint = row?.endpoint || "";

/* ✅ GET ALL CALLS OF SAME ENDPOINT */
$: apiLogs = apiTableData.filter(
  r => r.endpoint === endpoint
);

/* ---------- PARSE TIME ---------- */
function parseMs(v){
  if(!v) return 0;
  if(v.includes("ms")) return parseFloat(v);
  if(v.includes("s")) return parseFloat(v) * 1000;
  return 0;
}

/* ---------- LATENCIES ---------- */
$: latencies = apiLogs.map(r => parseMs(r.total));

/* ---------- SAFE PERCENTILE ---------- */
function percentile(arr,p){
  if(!arr.length) return 0;
  let sorted = [...arr].sort((a,b)=>a-b);
  let i = Math.floor((p/100) * sorted.length);
  return sorted[i] || 0;
}

$: p50 = percentile(latencies,50).toFixed(0);
$: p90 = percentile(latencies,90).toFixed(0);
$: p95 = percentile(latencies,95).toFixed(0);
$: p99 = percentile(latencies,99).toFixed(0);

/* ---------- AVG / MIN / MAX ---------- */
$: avg =
  latencies.length
    ? (latencies.reduce((a,b)=>a+b,0)/latencies.length).toFixed(0)
    : 0;

$: min = latencies.length ? Math.min(...latencies) : 0;
$: max = latencies.length ? Math.max(...latencies) : 0;

/* ---------- SUCCESS / ERROR ---------- */
$: successCount =
  apiLogs.filter(l => l.statusType === "success").length;

$: errorCount =
  apiLogs.filter(l => l.statusType === "error").length;

$: total = apiLogs.length || 1;

$: successRate = ((successCount/total)*100).toFixed(1);
$: errorRate = ((errorCount/total)*100).toFixed(1);

/* ✅ NEW — TOTAL CALL COUNT */
$: callCount = apiLogs.length;
</script>

<style>
.page{
  padding:24px;
  background:#0b1220;
  min-height:100vh;
  color:white;
}

.cards{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
  margin-top:20px;
}

.card{
  background:#111c2d;
  border:1px solid #1e2a40;
  border-radius:14px;
  padding:20px;
}

.value{
  font-size:28px;
  font-weight:bold;
}
</style>

<div class="page">

<div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
  <span
    style="cursor:pointer; font-size:22px;"
    on:click={() => onBack && onBack()}
  >
    ←
  </span>

  <h2 style="margin:0;">
    Performance Analytics — {endpoint}
  </h2>
</div>

<div class="cards">

<!-- ✅ TOTAL CALLS FIRST -->
<div class="card">
  <div>Total Calls</div>
  <div class="value">{callCount}</div>
</div>

<!-- ✅ AVG -->
<div class="card">
  <div>Average</div>
  <div class="value">{avg} ms</div>
</div>

<!-- ✅ MIN -->
<div class="card">
  <div>Min</div>
  <div class="value">{min} ms</div>
</div>

<!-- ✅ MAX -->
<div class="card">
  <div>Max</div>
  <div class="value">{max} ms</div>
</div>

<!-- ✅ PERCENTILES -->
<div class="card">
  <div>P50</div>
  <div class="value">{p50} ms</div>
</div>

<div class="card">
  <div>P90</div>
  <div class="value">{p90} ms</div>
</div>

<div class="card">
  <div>P95</div>
  <div class="value">{p95} ms</div>
</div>

<div class="card">
  <div>P99</div>
  <div class="value">{p99} ms</div>
</div>

<!-- ✅ SUCCESS / ERROR LAST -->
<div class="card">
  <div>Success Rate</div>
  <div class="value">{successRate}%</div>
</div>

<div class="card">
  <div>Error Rate</div>
  <div class="value">{errorRate}%</div>
</div>

</div>

</div>
