import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { CompactDatePicker } from "../ui/CompactDatePicker";
import { Button } from "../ui/button";
import { Filter, RotateCcw } from "lucide-react";

const media = [
  {
    label: "Instagram",
    image: "/media/instagram.png",
  },
  {
    label: "Youtube",
    image: "/media/youtube.png",
  },
  {
    label: "Presse",
    image: "/media/presse.png",
  },
  {
    label: "Tiktok",
    image: "/media/tiktok.png",
  },
  {
    label: "Facebook",
    image: "/media/facebook.png",
  },
];
const languages = [
  {
    label: "All",
    image: "https://flagcdn.com/48x36/un.png", // UN flag for "All"
  },
  {
    label: "Arabic",
    image: "https://flagcdn.com/48x36/sa.png", // Saudi Arabia flag
  },
  {
    label: "French",
    image: "https://flagcdn.com/48x36/fr.png", // France flag
  },
  {
    label: "English",
    image: "https://flagcdn.com/48x36/gb.png", // United Kingdom flag
  },
];

const FilterOverView = () => {
  const [dateRange, setDateRange] = useState({
    from: undefined as Date | undefined,
    to: undefined as Date | undefined,
  });

  return (
    <div>
      <div className="grid grid-cols-4 gap-2 mt-5">
        <CompactDatePicker
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="By source" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>By source</SelectLabel>
              {media.map((item) => (
                <SelectItem key={item.label} value={item.label}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="By sentiment" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>By sentiment </SelectLabel>
              {["Positive", "Neutral", "Negative"].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="By author" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>By author </SelectLabel>
              {[
                "All",
                "General public",
                "Influencers",
                "Media",
                "Competitors",
              ].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="By format" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>By format </SelectLabel>
              {["All", "Video", "Post", "Comment", "Article"].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="By language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>By language </SelectLabel>
              {languages.map((item) => (
                <SelectItem key={item.label} value={item.label}>
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="By City" />
          </SelectTrigger>
          <SelectContent className="h-[400px]">
            <SelectGroup>
              <SelectLabel>By City </SelectLabel>
              {[
                "Casablanca",
                "Rabat",
                "Fes",
                "Marrakech",
                "Tangier",
                "Agadir",
                "Meknes",
                "Oujda",
                "Kenitra",
                "Tetouan",
                "Safi",
                "Mohammedia",
                "Khouribga",
                "El Jadida",
                "Beni Mellal",
                "Nador",
                "Taza",
                "Settat",
                "Larache",
                "Ksar El Kebir",
              ].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex-1 flex items-center gap-2.5">
          <Button className="flex-1">
            <Filter />
            Filter
          </Button>
          <Button className="bg-transparent border border-main text-main">
            <RotateCcw />
          </Button>

        </div>
      </div>
    </div>
  );
};

export default FilterOverView;
