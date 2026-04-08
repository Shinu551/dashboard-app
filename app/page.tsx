"use client";

import { useEffect, useState } from "react";
import { demoData } from "../lib/demoData";
import { generateInsights } from "../lib/insights";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const insights = generateInsights(demoData);
    setData({ ...demoData, insights });
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50 p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">
        🚀 Revenue Intelligence Dashboard
      </h1>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-purple-500 text-white p-5 rounded-2xl shadow-lg">
          <p className="text-sm opacity-80">Revenue</p>
          <h2 className="text-2xl font-bold">${data.revenue}</h2>
        </div>

        <div className="bg-orange-500 text-white p-5 rounded-2xl shadow-lg">
          <p className="text-sm opacity-80">Real Revenue</p>
          <h2 className="text-2xl font-bold">${data.realRevenue}</h2>
        </div>

        <div className="bg-green-500 text-white p-5 rounded-2xl shadow-lg">
          <p className="text-sm opacity-80">Flow Revenue</p>
          <h2 className="text-2xl font-bold">${data.flowRevenue}</h2>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-3">🔥 Key Insights</h2>

        <div className="space-y-3">
          {data.insights.map((i: string, idx: number) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow hover:scale-[1.02] transition"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-3">🛒 Top Products</h2>

        <div className="bg-white p-4 rounded-xl shadow">
          {data.products.map((p: any, i: number) => (
            <div
              key={i}
              className="flex justify-between border-b py-2 last:border-none"
            >
              <span>{p.name}</span>
              <span className="font-semibold">${p.revenue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-yellow-100 p-5 rounded-xl">
        🚀 Connect your store to unlock real insights
      </div>
    </div>
  );
}
