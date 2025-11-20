
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

type Mention = {
  id: string
  title: string
  link: string
  postedDate: string
  thumbnail: string
  snippet?: string
  source?: string
  type?: string
  mentionCount: number
}

const defaultMentions: Mention[] = [
  {
    id: "1",
    title: "Glovo expands in Morocco",
    link: "https://example.com/thumb1.jpg ",
    postedDate: "2025-11-01",
    thumbnail: "/mentions/glovo.webp",
    snippet:
      "Glovo is expanding its delivery services to more cities in Morocco, aiming to cover both major urban centers and smaller towns. This expansion includes increasing the number of delivery partners, introducing faster delivery times, and offering more variety in the types of goods available for delivery. The company is also investing in local marketing campaigns to raise awareness and attract new users to its platform.",
    source: "facebook",
    type: "POSITIVE",
    mentionCount: 120,
  },
  {
    id: "2",
    title: "Fast Delivery Trends 2025",
    link: "https://example.com/fast-delivery-trends",
    postedDate: "2025-10-28",
    thumbnail: "/mentions/Glovo-1.png",
    snippet:
      "The fast delivery market in North Africa is experiencing significant growth in 2025, with trends showing an increase in demand for same-day delivery, more sustainable packaging solutions, and innovative technology integration. Companies like Glovo and other regional players are adapting by expanding their networks, improving logistics efficiency, and offering a wider range of products, from groceries to electronics. Consumers are increasingly relying on app-based delivery services for convenience and speed.",
    source: "facebook",
    type: "POSITIVE",
    mentionCount: 85,
  },
  {
    id: "3",
    title: "Glovo partners with local restaurants",
    link: "https://example.com/glovo-partners",
    postedDate: "2025-10-30",
    thumbnail: "/mentions/Glovo-2.webp",
    snippet:
      "Glovo has partnered with over 50 local restaurants in Casablanca to expand its offerings and provide more diverse meal options to customers. However, some restaurant owners have raised concerns about commission fees and delivery logistics. While Glovo aims to strengthen its presence in the Moroccan market, balancing profitability for the restaurants and customer satisfaction remains a key challenge. The partnership is expected to increase overall app usage and drive more orders, but the company will need to address these concerns carefully.",
    source: "instagram",
    type: "NEGATIVE",
    mentionCount: 65,
  },
  {
    id: "4",
    title: "Rabat sees growth in app-based deliveries",
    link: "https://example.com/rabat-growth",
    postedDate: "2025-10-25",
    thumbnail: "/mentions/Glovo-1.png",
    snippet:
      "Rabat has seen a remarkable growth in app-based delivery services this year, with a 35% increase in demand compared to the previous year. The surge is driven by changing consumer behavior, urbanization, and the increasing availability of smartphones. Businesses across the city are integrating delivery apps to meet customer expectations, and logistics companies are upgrading their infrastructure to handle higher order volumes. Experts predict that this trend will continue as more residents embrace digital solutions for everyday needs, from food delivery to groceries and retail products.",
    source: "instagram",
    type: "Article",
    mentionCount: 45,
  },
  {
    id: "5",
    title: "Glovo job opportunities in Morocco",
    link: "https://example.com/glovo-jobs",
    postedDate: "2025-10-20",
    thumbnail: "/mentions/glovo.webp",
    snippet:
      "Glovo is actively hiring delivery partners, customer support staff, and other roles across Morocco as part of its expansion strategy. The company offers competitive benefits, flexible working hours, and opportunities for career growth. While some potential employees have expressed concerns about workload and job stability, Glovo continues to focus on creating an efficient recruitment process and training programs. The goal is to support the increasing demand for delivery services while maintaining high-quality service and customer satisfaction.",
    source: "tiktok",
    type: "NEGATIVE",
    mentionCount: 30,
  },
]

export default function TopBlogs({ feeds = defaultMentions }: { feeds?: Mention[] }) {
  const [showInsightBlogs, setShowInsightBlogs] = React.useState(false)

  return (
    <Card className="flex-1 relative">
      <div className="absolute top-0 right-0">
        <ToolTipsProvider title="Latest mentions from various sources, providing quick access to recent conversations and insights." />
      </div>

      <CardHeader>
        <CardTitle>Top Blogs</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-2.5 pb-8">
        {feeds.slice(0, 3).map((feed) => (
          <div key={feed.id} className="flex items-center gap-3">
            <div
              className="h-12 w-12 rounded-md bg-gray-700 bg-cover bg-center"
              style={{ backgroundImage: `url(${feed.thumbnail})` }}
            ></div>
            <div className="flex flex-1 justify-between items-center">
              <div>
                <a
                  href={feed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:underline cursor-pointer block"
                >
                  {feed.title}
                </a>
                {feed.snippet && (
                  <a
                    href={feed.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-600 hover:underline cursor-pointer block"
                    dangerouslySetInnerHTML={{ __html: feed.snippet.slice(0, 60) }}
                  />
                )}
              </div>
              <div className="h-10 w-10 bg-primary text-white rounded-full flex justify-center items-center text-xs">
                {formatNumber(feed.mentionCount)}
              </div>
            </div>
          </div>
        ))}
      </CardContent>

      <CardFooter className="gap-2 pb-12">
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