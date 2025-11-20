import FilterFeed from "@/components/fil-actualites/FilterFeed";
import MentionPagination from "@/components/fil-actualites/MentionPagination";
import Mentions from "@/components/fil-actualites/Mentions";

import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2 flex flex-col gap-5">
        <Suspense>
        
          <Mentions />
          <MentionPagination
            pagination={{ page: 1, pageSize: 10, total: 300, totalPages: 30 }}
          />
        </Suspense>
      </div>

      <Suspense>
        <FilterFeed />
      </Suspense>
    </div>
  );
};

export default page;
