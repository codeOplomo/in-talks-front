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
import Image from "next/image"
import formatNumber from "@/lib/numbers"
import { ExternalLink } from "lucide-react"

type Feed = { id: string; link: string; mentionCount: number }

// Mock data for feeds
const mockFeeds: Feed[] = [
  { id: "1", link: "https://techcrunch.com/glovo-expansion", mentionCount: 120 },
  { id: "2", link: "https://forbes.com/glovo-partnerships", mentionCount: 95 },
  { id: "3", link: "https://medium.com/glovo-commissions", mentionCount: 60 },
  { id: "4", link: "https://wired.com/glovo-growth", mentionCount: 45 },
  { id: "5", link: "https://theverge.com/glovo-vendors", mentionCount: 30 },
]

export default function TopSharedLinks({ feeds = [] as Feed[] }) {
  const [showInsightBlogs, setShowInsightBlogs] = React.useState(false)
  const displayFeeds = feeds && feeds.length > 0 ? feeds : mockFeeds

  return (
    <Card className="flex-1 relative">
      <div className="absolute top-0 right-0">
        <ToolTipsProvider title="Latest mentions from various sources, providing quick access to recent conversations and insights." />
      </div>

      <CardHeader>
        <CardTitle>Top Shared Links</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2.5 pb-8">
        {displayFeeds.slice(0, 3).map((feed) => (
          <div key={feed.id} className="flex items-center gap-4">
            <ExternalLink className="h-5 w-5 text-primary" />
            <a
              href={feed.link}
              target="_blank"
              rel="noopener noreferrer"
              title={feed.link}
              className="flex-1 text-sm text-blue-600 underline cursor-pointer break-words"
            >
              {feed.link}
            </a>
            <div className="h-8 w-8 bg-primary rounded-full flex justify-center items-center text-white text-sm">
              {formatNumber(feed.mentionCount)}
            </div>
          </div>
        ))}
      </CardContent>

      <CardFooter className="gap-2 pb-4">
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