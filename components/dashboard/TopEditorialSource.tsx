"use client"

import * as React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ToolTipsProvider from "../charts/ToolTipsProvider"
import formatNumber from "@/lib/numbers"
import Image from "next/image"

// A small curated list of editorial sources (used for the "Top Editorial Sources" card)
const editorialSources = [
  { name: "Forbes Business Europe", mentionCount: 120 },
  { name: "Startup Daily", mentionCount: 95 },
  { name: "Food Delivery Insider", mentionCount: 78 },
  { name: "Le Business des Applications", mentionCount: 64 },
  { name: "Commerce News", mentionCount: 50 },
]


const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");
};

export default function TopEditorialSource() {
  const [showInsightBlogs, setShowInsightBlogs] = React.useState(false)

  return (
    <Card className="flex-1 relative">
      <div className="absolute top-0 right-0">
        <ToolTipsProvider title="Latest mentions from various sources, providing quick access to recent conversations and insights." />
      </div>

      <CardHeader>
        <CardTitle>Top Editorial Sources</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2.5">
        {editorialSources.slice(0, 6).map((src, idx) => (
          <div key={src.name} className="flex items-center gap-3 py-2">
            <div className="w-6 text-sm text-gray-400 text-right">{idx + 1}</div>
            <div className="h-8 w-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center font-medium">
              {getInitials(src.name)}
            </div>
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(src.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-sm text-blue-600 hover:underline cursor-pointer"
              title={`Search ${src.name}`}
            >
              {src.name}
            </a>
            <div className="h-8 w-8 bg-primary rounded-full flex justify-center items-center text-white text-sm">
              {formatNumber(src.mentionCount)}
            </div>
          </div>
        ))}
      </CardContent>

      <CardFooter className="pb-8">
        <Button size="sm" variant="outline" className="basis-1/2 mx-auto">
          Voir plus
        </Button>
      </CardFooter>

      <div className="absolute bottom-4 left-6">
        <div className="relative">
          <div
            className="text-sm text-black flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setShowInsightBlogs(true)}
            onMouseLeave={() => setShowInsightBlogs(false)}
          >
            <Image
              src="/icons/IN-TALKS-logo.png-2.webp"
              alt="IN-TALKS Logo"
              width={22}
              height={22}
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            <span
              className="font-semibold"
              style={{
                background: "linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              AI-powered insight
            </span>
          </div>
          {showInsightBlogs && (
            <div className="absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 w-auto min-w-80 max-w-xl">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Recent mentions focus on Glovo&apos;s expansion and partnerships, with positive sentiment indicating growing acceptance. Negative feedback on commissions suggests opportunities for improved vendor relations.
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}