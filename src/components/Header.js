import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import Link from "next/link";
import SignIn from "../pages/SignIn";

const Header = () => {
  return (
    <BrowserRouter>
      <div className="w-full bg-gray-100 p-1 shadow flex flex-row justify-between">
        <div className="flex items-centner m-2">
          <Link
            to="/"
            className="border-r-2 border-gray-300 w-[50px] flex items-centner justify-center "
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
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              defaultValue=""
              size="small"
              variant="outlined"
            />
            {/* <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="10"
          /> */}
          </div>
          {/* <Link href="/Sign-in">
          <Button variant="text" color="info">
            Login
          </Button>
        </Link> */}
          {/* <Route exact path="/SignIn">
            <SignIn />
          </Route> */}
          <Link to="/Login">
            <Button variant="text">Login</Button>
          </Link>
          <Link to="/SignIn">
            <Button variant="text">Sign Up</Button>
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Header;
