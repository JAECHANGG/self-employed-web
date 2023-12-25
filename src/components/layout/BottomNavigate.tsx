"use client";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./bottom-navigate.css";

const iconSize = "w-7 h-7";

const menu = [
  {
    href: "/home",
    icon: <HomeOutlinedIcon className={iconSize} />,
    clickedIcon: <HomeIcon className={iconSize} />,
  },
  {
    href: "/boards",
    icon: <SpaceDashboardOutlinedIcon className={iconSize} />,
    clickedIcon: <SpaceDashboardIcon className={iconSize} />,
  },
  {
    href: "/notifications",
    icon: <NotificationsOutlinedIcon className={iconSize} />,
    clickedIcon: <NotificationsIcon className={iconSize} />,
  },
  {
    href: "/mypage",
    icon: <AccountBoxOutlinedIcon className={iconSize} />,
    clickedIcon: <AccountBoxIcon className={iconSize} />,
  },
  // {
  //   href: "/settings",
  //   icon: <SettingsOutlinedIcon />,
  //   clickedIcon: <SettingsIcon />,
  // },
];

export const BottomNavigate = () => {
  const pathname = usePathname();

  return (
    <footer className="h-fit py-3 border-t-[1px] border-gray-200 flex justify-evenly items-center">
      {menu.map(({ href, icon, clickedIcon }) => (
        <Link key={href} href={href} className="app-box text-white">
          {pathname === href ? clickedIcon : icon}
        </Link>
      ))}
    </footer>
  );
};
