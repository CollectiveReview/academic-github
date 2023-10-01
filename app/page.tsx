import Home from "@/app/components/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic GitHub | Homepage",
  description: "",
};

const Page = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default Page;
