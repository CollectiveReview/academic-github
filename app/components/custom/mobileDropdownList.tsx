"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { ChevronDownIcon } from "lucide-react";

interface Menu {
  name: string;
  url: string;
  subMenu?: { name: string; url: string }[];
}

interface DropdownMenuProps {
  menuList: Menu[];
}

const MobileDropdownMenu: React.FC<DropdownMenuProps> = ({ menuList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    if (openSubMenuIndex === index) {
      setOpenSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(index);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {
        <div
          className={`absolute  left-0 h-auto w-full bg-white/[1.0] p-4 border border-[#CCC] rounded transition-all duration-300 z-[-1] ${
            isOpen ? "top-12" : "top-[-300px]"
          }`}
        >
          <div className=" flex flex-col justify-center items-center  ">
            <div className="flex w-full justify-end h-auto">
              <button className="h-5 w-5" onClick={() => setIsOpen(false)}>
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="w-4/5">
              <ul className="flex flex-col justify-center items-start">
                {menuList.map((item, index) => (
                  <li key={index} className="m-1">
                    {item.subMenu ? (
                      <button
                        onClick={() => toggleSubMenu(index)}
                        className="flex justify-center items-center"
                      >
                        {item.name}
                        <span
                          className={`p-1 transition-transform duration-300 transform ${
                            openSubMenuIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDownIcon size={12} />
                        </span>
                      </button>
                    ) : (
                      <Link href={`${item.url}`} className="m-0" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    )}

                    {item.subMenu && openSubMenuIndex === index && (
                      <ul className="pl-4">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="my-2">
                            <Link
                              href={`${subItem.url}`}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubMenuIndex(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default MobileDropdownMenu;
