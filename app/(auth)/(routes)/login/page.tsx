import { Input } from "@/components/ui/input";
import Button from "@mui/material/Button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="border border-gray-100 rounded p-5 space-y-3 ">
          <Input placeholder="email" type="text" />
          <Input placeholder="password" type="password" />
          <div className="flex justify-between items-center">
            <Link href="/sign-in" className="text-sm hover:text-gray-700">
              <p className="">Don`t have account?</p>
            </Link>
            <Button variant="contained" className="bg-gray-700">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
