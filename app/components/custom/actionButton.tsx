import * as React from "react";

import { cn } from "@/lib/utils";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const ActionButton = ({ icon, name, href }) => {
    return (
        <div className="flex items-center bg-white border rounded min-w-[300px]">
            <div className=" px-2">{icon}</div>
            <button
                className={cn(
                    "outline-none border-0 focus:ring-0 flex h-8 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                )}
            >{name}</button>
        </div>
    );
}

export { ActionButton };
