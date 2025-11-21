import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Speech } from "lucide-react";
import ToolTipsProvider from "./ToolTipsProvider";

const ChartLangage = ({ data }: { data: JSON }) => {
  const [showInsight, setShowInsight] = useState(false);

  const countries = Object.entries(data).map(([country, value]) => ({
    country,
    value,
  }));

  return (
    <Card className="flex flex-col rounded-md gap-5 relative">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-2 justify-center">
          <CardTitle className="text-center">Top Languages</CardTitle>
          <ToolTipsProvider
            title={`This chart illustrates the distribution of languages used in mentions, providing insights into the linguistic diversity and reach of the content.`}
          />
        </div>
      </CardHeader>
      <CardContent className="justify-center pb-0 bg-transparent mt-5 flex flex-col gap-2.5 ">
        {countries.map((country, index) => (
          <div key={index} className="flex flex-col gap-2.5">
            <div className="flex items-center text-sm justify-between">
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2">
                  <Speech className="h-5 w-5" />
                </div>
                <p>{country.country}</p>
              </div>
              <p>{country.value?.toFixed(2)} %</p>
            </div>
            <span
              className="w-full block h-1 rounded-full bg-[#36a2eb] "
              style={{
                width: `${country.value?.toFixed(2)}%`,
              }}
            ></span>
          </div>
        ))}
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
                Language distribution analysis shows French as the primary language at 67.45%, followed by English at 18.32%. This linguistic concentration indicates content should be primarily in French while maintaining English support for international reach and accessibility.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ChartLangage;
