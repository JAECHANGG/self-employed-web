"use client";

import React from "react";
import "./bottom-navigate.css";
import HomeIcon from "@mui/icons-material/Home";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/home", icon: <HomeOutlinedIcon />, clickedIcon: <HomeIcon /> },
  {
    href: "/boards",
    icon: <SpaceDashboardOutlinedIcon />,
    clickedIcon: <SpaceDashboardIcon />,
  },
  {
    href: "/notifications",
    icon: <NotificationsOutlinedIcon />,
    clickedIcon: <NotificationsIcon />,
  },
  {
    href: "/mypage",
    icon: <AccountBoxOutlinedIcon />,
    clickedIcon: <AccountBoxIcon />,
  },
  {
    href: "/settings",
    icon: <SettingsOutlinedIcon />,
    clickedIcon: <SettingsIcon />,
  },
];

export const BottomNavigate = () => {
  const pathname = usePathname();

  return (
    <footer className="h-[5vh] pt-4 pb-8 border-t-2 border-gray-200 flex items-center">
      {menu.map(({ href, icon, clickedIcon }) => (
        <Link key={href} href={href} className="app-box">
          {pathname === href ? clickedIcon : icon}
        </Link>
      ))}
    </footer>
  );
};
