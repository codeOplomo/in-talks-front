"use client";

import { PieChart, Pie } from "recharts";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ToolTipsProvider from "../charts/ToolTipsProvider";
import Image from "next/image";

export const description = "A radar chart with dots";

const chartData = [
  { month: "Livraison", desktop: 186, fill: "#10B981" },
  { month: "Restaurants", desktop: 305, fill: "#6B7280" },
  { month: "Supermarket", desktop: 237, fill: "#EF4444" },
  { month: "Commande", desktop: 273, fill: "#F59E0B" },
  { month: "Nourriture", desktop: 209, fill: "#8B5CF6" },
  { month: "Paiement", desktop: 214, fill: "#06B6D4" },
];

const chartConfig = {
  desktop: {
    label: "Mentions",
    color: "#2dbaf6",
  },
} satisfies ChartConfig;

function ShareOfVoice() {
  const [showInsight, setShowInsight] = useState(false);

  return (
    <Card className="flex flex-col justify-between relative">
      <CardHeader className="items-center">
        <div className="flex items-center gap-2">
          <CardTitle>Share of voice</CardTitle>
          <ToolTipsProvider
            title={`Displays how conversation is shared between categories (or competitors). It highlights the largest contributor to the overall share and helps assess relative visibility.`}
          />
        </div>
      </CardHeader>
      <CardContent className="pb-16">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="desktop"
              nameKey="month"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={2}
              cornerRadius={4}
            />
          </PieChart>
        </ChartContainer>
        <div className="flex flex-wrap justify-center w-full items-center gap-3 my-2">
          {chartData.map((item) => (
            <div
              key={item.month}
              className="flex items-center text-sm px-2 py-1 whitespace-nowrap"
            >
              <div className="flex gap-2 items-center">
                <span
                  className="h-3 w-3 block rounded-full flex-shrink-0"
                  style={{ backgroundColor: `${item.fill}` }}
                />
                <p className="capitalize">{item.month}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="absolute bottom-4 left-6">
        <div className="relative">
          <div 
            className="text-sm text-black flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setShowInsight(true)}
            onMouseLeave={() => setShowInsight(false)}
          >
            <Image src="/icons/IN-TALKS-logo.png-2.webp" alt="IN-TALKS Logo" width={22} height={22} style={{display: 'inline-block', verticalAlign: 'middle'}} />
            <span
              className="font-semibold"
              style={{
                background: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              AI-powered insight
            </span>
          </div>
          {showInsight && (
            <div className="absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 w-auto min-w-80 max-w-xl">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fast-food dominates the share of voice at 35%, indicating strong consumer interest in this category. Delivery services follow closely at 29%, showing the importance of logistics in consumer decision-making.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default ShareOfVoice;
