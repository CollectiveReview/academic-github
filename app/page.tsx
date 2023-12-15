import type { Metadata } from "next";
import Image from 'next/image'
import { Button } from "./components/ui/button";
import { generateSVG } from "./components/gradient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic GitHub | Homepage",
  description: "",
};

const Page = () => {
  // const svg = generateSVG("asdf");
  return (
    <div >
      <div>
        <Image className="-z-50" src="/hero.png" alt="crouching giant"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }} />
      </div>
      <Button><Link href={"./repos"}>Show me example Repository</Link></Button>
    </div>
  );
};

export default Page;
