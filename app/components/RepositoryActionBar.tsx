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
import { ActionButton } from "./custom/actionButton";
import { BeakerIcon, GitPullRequestClosedIcon, GitPullRequestIcon, IssueOpenedIcon, NoteIcon } from "@primer/octicons-react";


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

const RepositoryActionBar = () => {
  const { user, logOut } = UserAuth();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="w-full bg-white-100 p-1  flex flex-row justify-between mt-16  items-center">
      <div className="flex items-centner m-2">
        <ActionButton icon={<NoteIcon />} name="Article" href="" />
        <ActionButton icon={<IssueOpenedIcon />} name="Issues" href="" />
        <ActionButton icon={<GitPullRequestIcon />} name="Letters" href="" />
      </div>
      <div className="md:block hidden h-full items-center ">
        <div className="flex space-x-3 items-center h-full m-2 ">
          {user ? (
            <Link href="/sign-in">
              <Button
                variant="text"
                className="text-gray-700 hover:text-black h-7"
              >
                Collaborate
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login" className="border border-gray-200 rounded">
                <Button
                  variant="text"
                  className="text-gray-700 hover:text-black h-7"
                >
                  clone to edit
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

export default RepositoryActionBar;
