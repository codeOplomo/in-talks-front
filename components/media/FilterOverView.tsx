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
    label: "Tous",
    image: "https://flagcdn.com/48x36/un.png", // UN flag for "Tous"
  },
  {
    label: "Arabe",
    image: "https://flagcdn.com/48x36/sa.png", // Saudi Arabia flag
  },
  {
    label: "Français",
    image: "https://flagcdn.com/48x36/fr.png", // France flag
  },
  {
    label: "Anglais",
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
            <SelectValue placeholder="Par source" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Par source</SelectLabel>
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
            <SelectValue placeholder="Par sentiment" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Par sentiment </SelectLabel>
              {["Positif", "Neutre", "Négatif"].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Par auteur" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Par auteur </SelectLabel>
              {["Tous", "Grand public", "Influenceurs", "Médias", "Concurrents"].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Par format" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Par format </SelectLabel>
              {["Tous", "Vidéo", "Publication", "Commentaire", "Article"].map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Par langue" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Par langue </SelectLabel>
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
            <SelectValue placeholder="Par ville" />
          </SelectTrigger>
          <SelectContent className="h-[400px]">
            <SelectGroup>
              <SelectLabel>Par ville </SelectLabel>
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
            Filtrer
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
