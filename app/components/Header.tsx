"use client";

import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SearchInput } from "@/app/components/custom/searchInput";

import MobileDropdownMenu from "./custom/mobileDropdownList";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
// import { UserAuth } from "@/app/api/AuthContext";
import ProfileMenu from "@/app/components/custom/profileMenu";
import { UserAuth } from '../api/AuthContext';

const menuList = [
  {
    name: "Login",
    url: "/login",
  },
  {
    name: "Sign In",
    url: "/sign-in",
  },
];

const Header = () => {
  const { user, logOut } = UserAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="w-full bg-gray-100 p-1 shadow flex flex-row justify-between fixed items-center">
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

          <h5 className="text-gray-500 ">Sample Repository Title</h5>
        </div>
      </div>
      <div className="md:block hidden h-full items-center ">
        <div className="flex space-x-3 items-center h-full m-2 ">
          <div className="flex items-center h-full">
            <SearchInput placeholder="Search any repository..." />
          </div>
          {user ? (
            <div>
              <button onClick={logOut}>Logout</button>
            </div>
          ) : null
          }
          {user ? (
            <div>
              <ProfileMenu />
            </div>
          ) : (
            <>
              <Link href="/login" className="border border-gray-200 rounded">
                <Button
                  variant="text"
                  className="text-gray-700 hover:text-black h-7"
                >
                  Login
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button
                  variant="text"
                  className="text-gray-700 hover:text-black h-7"
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center px-5">
        <MobileDropdownMenu menuList={menuList} />
      </div>
    </div>
  );
};

export default Header;
