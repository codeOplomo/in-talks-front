"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import ToolTipsProvider from "../charts/ToolTipsProvider";

export const description = "An age and gender breakdown stacked bar chart";

const chartData = [
  { ageGroup: "18-24", male: 45, female: 52, other: 3 },
  { ageGroup: "25-34", male: 120, female: 135, other: 8 },
  { ageGroup: "35-44", male: 95, female: 88, other: 5 },
  { ageGroup: "45-54", male: 78, female: 82, other: 4 },
  { ageGroup: "55-64", male: 62, female: 68, other: 2 },
  { ageGroup: "65+", male: 45, female: 52, other: 3 },
];

const chartConfig = {
  male: {
    label: "Male",
    color: "hsl(221, 83%, 53%)", // Blue
  },
  female: {
    label: "Female",
    color: "hsl(350, 89%, 60%)", // Pink
  },
  other: {
    label: "Other",
    color: "hsl(142, 76%, 36%)", // Green
  },
} satisfies ChartConfig;

function AgeGenderBreakdown() {
  const [showInsight, setShowInsight] = useState(false);

  return (
    <Card className="relative">
        <div className=" absolute top-0 right-0">
                  <ToolTipsProvider
                    title={`Age and Gender Breakdown provides insights into the distribution of your audience across different age groups and genders, helping tailor content and marketing strategies.`}
                  />
                </div>
        <CardHeader>
          <CardTitle>Age & Gender Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="" config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
              barSize={10} // Smaller bar size
              barGap={2} // Reduced gap between bars
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="ageGroup"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar
                dataKey="male"
                stackId="a"
                fill="var(--color-male)"
                radius={[0, 0, 4, 4]}
              />
              <Bar dataKey="female" stackId="a" fill="var(--color-female)" />
              <Bar
                dataKey="other"
                stackId="a"
                fill="var(--color-other)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <div className="absolute bottom-4 left-6">
          <div className="relative">
            <div 
              className="text-sm text-black flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setShowInsight(true)}
              onMouseLeave={() => setShowInsight(false)}
            >
              <Image src="/icons/IN-TALKS-logo.png-2.webp" alt="IN-TALKS Logo" width={22} height={22} className="inline-block align-middle" />
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
                  Age and gender analysis shows the 25-34 age group as the largest segment with balanced gender distribution. Female audience slightly dominates across most age groups, suggesting content strategies should focus on this demographic for maximum engagement.
                </p>
              </div>
            )}
          </div>
        </div>
      </Card>
  );
}

export default AgeGenderBreakdown;
