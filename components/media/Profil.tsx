"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import FollowersDisptach from "./FollowersDisptach";
// import FollowersDisptach from "./FollowersDisptach";
// import { Account } from "@prisma/client";
// import { AxiosResponse } from "axios";
// import { useQuery } from "@tanstack/react-query";
// import api from "@/lib/api";
// import Error from "../layout/Error";
// import Loading from "../layout/Loading";

const data = {
  profil: "/glovo-logo.jpg",
  name: "Glovo Maroc",
  slug: "Glovo Maroc: Your Local Delivery Partner for Everything",
  country: "Morocco",
  bio: `Glovo Maroc is a delivery service that connects customers with local businesses, offering a wide range of products from food to groceries. Their social media presence emphasizes partnerships with local merchants, showcasing success stories and community engagement. Content themes include Ramadan promotions, customer support, and highlighting the convenience of their service. The brand actively engages with its audience through giveaways and interactive posts, fostering a sense of community and support for local businesses.`,
};
const Profil = () => {
  return (
    <Card>
      <CardContent>
        <div className="rounded-md p-5">
          <div className="grid grid-cols-5 justify-between">
            <div className="flex flex-col gap-5  col-span-3">
              <div className="flex items-center gap-5">
                <Image
                  src={data.profil}
                  className="rounded-full"
                  alt={data.name}
                  width={150}
                  height={150}
                />
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-xl">{data.name}</p>
                  <p className="text-sm">{data.slug}</p>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"https://flagcdn.com/ma.svg"}
                      width={25}
                      height={25}
                      className="rounded-br-md rounded-tl-md"
                      alt="Morocco"
                    />
                    {data.country}
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-300/70" />
              <div>
                <p className="font-semibold mb-2">Profile Overview</p>
                <p className="text-sm"> {data.bio}</p>
              </div>
            </div>

            <div className="col-span-2 flex justify-end">
              <FollowersDisptach />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profil;
