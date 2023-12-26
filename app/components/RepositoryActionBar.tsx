"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserAuth } from '../api/AuthContext';
import { ActionButton } from "./custom/actionButton";

import { CircleDot, GitPullRequestIcon, ScrollTextIcon, } from "lucide-react";

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
        <ActionButton icon={<ScrollTextIcon />} text="Article" href="" />
        <ActionButton icon={<CircleDot />} text="Issues" href="" />
        <ActionButton icon={<GitPullRequestIcon />} text="Letters" href="" />
      </div>
      <div className="md:block hidden h-full items-center ">
        <div className="flex space-x-3 items-center h-full m-2 ">
          {user ? (
            <Link href="/sign-in">
              <Button
                className="text-gray-700 hover:text-black h-7"
              >
                Collaborate
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login" className="border border-gray-200 rounded">
                <Button
                  className="text-gray-700 hover:text-black h-7"
                >
                  clone to edit
                </Button>
              </Link>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepositoryActionBar;
