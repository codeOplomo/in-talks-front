import React from "react";
import { Badge } from "../ui/badge";
import { Calendar } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

interface Mention {
  id: string;
  title: string;
  link: string;
  postedDate: string;
  thumbnail: string;
  snippet: string;
  source: string;
  type: string;
}
const FeedCard = ({ feed }: { feed: Mention }) => {
  return (
    <Card className="relative h-40 overflow-hidden">
      <Badge
        className={`absolute top-3 right-3 z-10 ${
          feed.type === "POSITIVE"
            ? "bg-green-500 text-white"
            : feed.type === "NEGATIVE"
            ? "bg-red-500 text-white"
            : "bg-gray-500 text-white"
        }`}
      >
        {feed.type}
      </Badge>
      <CardContent className="relative rounded-md flex items-center gap-4 p-4 h-full">
        <a
          key={feed.id}
          href={feed.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block flex-shrink-0"
        >
          <div
            className="h-24 w-24 rounded-md bg-gray-700 bg-cover bg-center"
            style={{ backgroundImage: `url(${feed.thumbnail})` }}
          ></div>
        </a>
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
          <a
            key={feed.id}
            href={feed.link ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2"
          >
            <h2 className="text-sm font-semibold line-clamp-1 leading-tight">{feed.title}</h2>

            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{moment(feed.postedDate).format("MMM Do YYYY")}</span>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src={`/media/${feed.source.toLowerCase()}.png`}
                  alt={`/media/${feed.source}.png`}
                  width={16}
                  height={16}
                />
                <span className="capitalize">{feed.source}</span>
              </div>
            </div>
            {feed.snippet && (
              <p className="text-xs text-gray-600 line-clamp-2 leading-tight">
                {feed.snippet.slice(0, 120)}...
              </p>
            )}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
