

"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Filter, RotateCcw, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import Image from "next/image";

const FilterFeed = () => {
  return (
    <div className="flex flex-col gap-5 h-[500px] sticky top-5">
      <Card>
        <CardHeader>
          <CardTitle className="font-semibold">Fil d’actualités</CardTitle>
        </CardHeader>
        <CardContent className=" ">
          <div className="flex justify-center items-center relative w-full">
            <Input placeholder="Search through mentions" />
            <Search className=" size-4 absolute right-3 text-gray-700 transform -translate-y-1/2 top-1/2" />
          </div>
        </CardContent>
      </Card>
      <OrderBy />
      <FilterSource />
      <FilterSentiment />
      <div className="bg-white border rounded-md p-5 flex gap-2">
        <Button
          asChild
          className="bg-main border hover:bg-transparent border-main hover:text-main flex-1"
        >
          <Link href={"/social-listening"}>
            <Filter />
            Filter
          </Link>
        </Button>
        <Button
          asChild
          className="bg-transparent hover:bg-main text-main border border-main hover:text-white"
        >
          <Link href={"/social-listening"}>
            <RotateCcw />
          </Link>
        </Button>
      </div>
    </div>
  );
};

// ---------------- ORDER BY ----------------
const OrderBy = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentOrder = searchParams.get("orderBy") || "";

  const handleChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("orderBy", value);
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-semibold">Order by</CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={handleChange} defaultValue={currentOrder}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Order By" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup>
              <SelectLabel>Trier par</SelectLabel>
              <SelectItem value="desc">Plus récents en premier</SelectItem>
              <SelectItem value="asc">Plus anciens en premier</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
};

// ---------------- FILTER SOURCE ----------------
const FilterSource = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSources = searchParams.get("sources")?.split(",") || [];

  const sources = [
    { label: "Facebook", value: "Facebook" },
    { label: "Instagram", value: "Instagram" },
    { label: "Tiktok", value: "Tiktok" },
    { label: "Youtube", value: "YouTube" },
    { label: "Presse", value: "Presse" },
  ];

  const handleToggle = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    let newSources = [...selectedSources];

    if (newSources.includes(value)) {
      newSources = newSources.filter((v) => v !== value);
    } else {
      newSources.push(value);
    }

    if (newSources.length === 0) {
      params.delete("sources");
    } else {
      params.set("sources", newSources.join(","));
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className=" font-semibold">Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-5">
          {sources.map((source) => (
            <div key={source.value} className="flex items-center space-x-2">
              <Checkbox
                id={source.value}
                checked={selectedSources.includes(source.value)}
                onCheckedChange={() => handleToggle(source.value)}
              />

              <Label htmlFor={source.value}>
                <Image
                  src={`/media/${source.value.toLowerCase()}.png`}
                  alt={`/media/${source.value}.png`}
                  width={20}
                  height={20}
                />
                {source.label}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// ---------------- FILTER SENTIMENT ----------------
const FilterSentiment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSentiments = searchParams.get("sentiments")?.split(",") || [];

  const sentiments = [
    { label: "Negative", value: "NEGATIVE" },
    { label: "Positive", value: "POSITIVE" },
    { label: "Neutral", value: "NEUTRAL" },
  ];

  const handleToggle = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    let newSentiments = [...selectedSentiments];

    if (newSentiments.includes(value)) {
      newSentiments = newSentiments.filter((v) => v !== value);
    } else {
      newSentiments.push(value);
    }

    if (newSentiments.length === 0) {
      params.delete("sentiments");
    } else {
      params.set("sentiments", newSentiments.join(","));
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className=" font-semibold">Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-5">
          {sentiments.map((sentiment) => (
            <div key={sentiment.value} className="flex items-center space-x-2">
              <Checkbox
                id={sentiment.value}
                checked={selectedSentiments.includes(sentiment.value)}
                onCheckedChange={() => handleToggle(sentiment.value)}
              />
              <Label htmlFor={sentiment.value}>{sentiment.label}</Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterFeed;
