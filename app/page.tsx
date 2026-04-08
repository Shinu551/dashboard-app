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

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          🚀 Revenue Intelligence
        </h1>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:scale-105 transition">
          Connect Store
        </button>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/10 backdrop-blur p-5 rounded-2xl shadow">
          <p className="text-sm opacity-70">Total Revenue</p>
          <h2 className="text-2xl font-bold">${data.revenue}</h2>
        </div>

        <div className="bg-white/10 backdrop-blur p-5 rounded-2xl shadow">
          <p className="text-sm opacity-70">Real Revenue</p>
          <h2 className="text-2xl font-bold">${data.realRevenue}</h2>
        </div>

        <div className="bg-white/10 backdrop-blur p-5 rounded-2xl shadow">
          <p className="text-sm opacity-70">Flow Revenue</p>
          <h2 className="text-2xl font-bold">${data.flowRevenue}</h2>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">🔥 AI Insights</h2>

        <div className="space-y-3">
          {data.insights.map((i: string, idx: number) => (
            <div
              key={idx}
              className="bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition"
            >
              {i}
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">🛒 Top Products</h2>

        <div className="bg-white/10 rounded-xl p-4">
          {data.products.map((p: any, i: number) => (
            <div
              key={i}
              className="flex justify-between py-2 border-b border-white/10 last:border-none"
            >
              <span>{p.name}</span>
              <span className="font-semibold">${p.revenue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-500 to-orange-500 p-6 rounded-2xl text-center">
        🚀 Unlock real revenue insights with your store data
      </div>
    </div>
  );
}