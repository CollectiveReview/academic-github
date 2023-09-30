import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import TextField from "@mui/material/TextField";
import { Input } from "@/components/custom/searchInput"

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-gray-100 p-1 shadow flex flex-row justify-between fixed">
      <div className="flex items-centner m-2">
        <Link
          href="/"
          className="border-r-2 border-gray-300 w-[50px] flex items-centner justify-center"
        >
          <IconButton aria-label="delete">
            <HomeIcon />
          </IconButton>
        </Link>
        <div className="flex px-3 items-center">
          <p className="text-gray-700 text-lg">Porous...</p>
          <div className="mx-2 flex h-full items-center">
            <ArrowBackIosIcon fontSize="12px" className="text-gray-500" />
            <ArrowForwardIosIcon fontSize="12px" className="text-gray-500" />
          </div>
          <p className="text-gray-700 text-lg">Aerogel Drying Shrinkage</p>
        </div>
      </div>
      <div className="flex space-x-3 items-center h-full m-2">
        <div>
          <Input />
          {/* <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue=""
            size="small"
            variant="outlined"
          /> */}
        </div>
        <Link href="/login">
          <Button variant="text">Login</Button>
        </Link>
        <Link href="/sign-in">
          <Button variant="text">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
