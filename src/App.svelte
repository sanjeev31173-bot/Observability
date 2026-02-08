<script>
import Dashboard from "./pages/dashBoard.svelte";
import DbDetails from "./pages/dbDetails.svelte";
import PerformanceDetails from "./pages/performanceDetails.svelte";

let page = "dashboard";
let selectedRow = null;

function openDb(row){
  selectedRow = row;
  page = "db";
}

function openPerformance(row){
  selectedRow = row;
  page = "performance";
}

function goBack(){
  page = "dashboard";
}
</script>

{#if page === "dashboard"}

  <Dashboard
    on:onDbClick={(e)=> openDb(e.detail)}
    on:onPerformanceClick={(e)=> openPerformance(e.detail)}
  />

{:else if page === "db"}

  <DbDetails
    row={selectedRow}
    on:onBack={goBack}
  />

{:else if page === "performance"}

  <PerformanceDetails
    row={selectedRow}
    onBack={goBack}
  />

{/if}
