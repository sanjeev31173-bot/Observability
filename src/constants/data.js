export async function getDashboardData() {
  await new Promise(r => setTimeout(r, 500));

  return {
    totalApis: 124,
    avgResponse: 245,
    successRate: 98.2,
    errorRate: 1.8,
    errorCount: 23,
    growth: 12,
    baselineDiff: 15
  };
}
