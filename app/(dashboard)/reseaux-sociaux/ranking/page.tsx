import RankingDataTable from "@/components/Ranking/RankingDataTable";
// import RankingFilters from "@/components/Ranking/RankingFilters";
import StockMarket from "@/components/StockMarket";

import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
        
      <div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl my-3 font-extrabold tracking-tight text-gray-900 dark:text-white">
          Classement
        </h2>
        {/* <p className="mt-1 text-sm sm:text-base text-muted-foreground max-w-3xl">
          Générez et téléchargez des rapports détaillés sur vos performances sur
          les re9seaux sociaux, les insights d&apos;audience et plus encore.
        </p> */}
      </div>
      <StockMarket />
      <Suspense>
        {/* <RankingFilters /> */}
        <RankingDataTable />
      </Suspense>
    </div>
  );
};

export default page;
