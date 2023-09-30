import { Input } from "@/components/ui/input";
import Button from "@mui/material/Button";
// import Link from "next/link";

const SignInPage = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="border border-gray-100 rounded p-10 space-y-3 shadow-md">
          <Input placeholder="name" type="text" />
          <Input placeholder="email" type="text" />
          <Input placeholder="password" type="password" />
          <Input placeholder="check password" type="password" />
          <div className="flex ">
            <Button variant="contained" className="w-full bg-gray-700">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
