import * as React from "react";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface ActionButton {
  icon: ReactNode;
  text: string;
  href: string;
}

const ActionButton = ({ icon, text, href }: ActionButton) => {
  return (
    <div className="flex items-center bg-white border rounded min-w-[300px]">
      <div className=" px-2">{icon}</div>
      <button
        className={cn(
          "outline-none border-0 focus:ring-0 flex h-8 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        {text}
      </button>
    </div>
  );
};

export { ActionButton };
