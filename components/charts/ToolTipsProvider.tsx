import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircleQuestionMark } from "lucide-react";
const ToolTipsProvider = ({ title }: { title: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger className=" absolute top-0 right-0 z-10" asChild>
        <Button size={"icon"}>
          <MessageCircleQuestionMark />
        </Button>
      </TooltipTrigger>
      <TooltipContent className=" w-[350px]">
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolTipsProvider;
