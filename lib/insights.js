export function generateInsights(data) {
  const insights = [];

  const total = data.realRevenue;

  if (data.revenue > data.realRevenue * 1.3) {
    insights.push("🚨 Revenue is inflated — attribution is misleading");
  }

  if (data.flowRevenue > data.campaignRevenue * 1.5) {
    insights.push("🔥 Flows are your hidden revenue engine");
  }

  if (data.flowRevenue < total * 0.2) {
    insights.push("💡 Flows are underutilized — growth opportunity");
  }

  if (data.discounts[0].revenue > total * 0.6) {
    insights.push("🚨 Heavy discount reliance hurting margins");
  }

  if (data.products[0].revenue > total * 0.5) {
    insights.push("⚠️ Revenue depends on one product");
  }

  return insights;
}