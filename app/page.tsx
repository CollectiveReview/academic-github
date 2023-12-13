import type { Metadata } from "next";
import Image from 'next/image'
import { Button } from "./components/ui/button";


export const metadata: Metadata = {
  title: "Academic GitHub | Homepage",
  description: "",
};

const Page = () => {
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
      <Button>Show me example Repository</Button>
    </div>
  );
};

export default Page;
