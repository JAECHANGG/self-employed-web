import React from "react";
import "./bottom-navigate.css";
import HomeIcon from "@mui/icons-material/Home";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Link from "next/link";

export const BottomNavigate = () => {
  return (
    <footer className="h-[5vh] border-t border-gray-200 flex items-center">
      <Link href="/" className="app-box">
        <HomeIcon />
      </Link>
      <Link href="/boards" className="app-box">
        <SpaceDashboardIcon />
      </Link>
      <Link href="/notifications" className="app-box">
        <NotificationsIcon />
      </Link>
      <Link href="/mypage" className="app-box">
        <AccountBoxIcon />
      </Link>
      <Link href="/settings" className="app-box">
        <SettingsIcon />
      </Link>
    </footer>
  );
};
