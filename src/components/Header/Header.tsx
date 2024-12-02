"use client";

import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import Logo from "@/shared/Logo";
import useOutsideClick from "@/hooks/useOutsideClick";
import SignInButton from "@/shared/SignInButton";
import MenuBar from "@/shared/MenuBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import { useOverlay } from "@/context/OverlayContext";
import { useRouter, usePathname } from "next/navigation";
import { FaPlaneDeparture } from "react-icons/fa";
import { TiTicket } from "react-icons/ti";
import { GoChecklist } from "react-icons/go";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { setLoading } = useOverlay();

  useEffect(() => {
    // Đặt showHeaderSearch thành false mỗi khi pathname thay đổi (route thay đổi)
    switch (pathname) {
      case "/":
        setCurrentTab("Book");
        break;
      case "/booking/manage-booking":
        setCurrentTab("Manage Booking");
        break;
      case "/booking/online-check-in":
        setCurrentTab("Online Check-in");
        break;
      default:
        setCurrentTab("Book");
    }
    setShowHeaderSearch(false);
  }, [pathname]);

  const redirectToSignIn = () => {
    setLoading(true);
    try {
      router.push("/auth/signin");
      console.log("Redirect to sign in page");
    } catch (error) {
      console.error(error);
    }
  };

  const [showHeaderSearch, setShowHeaderSearch] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<"Book" | "Manage Booking" | "Online Check-in">("Book");
  const handleTabChange = (tab: "Book" | "Manage Booking" | "Online Check-in") => {
    setShowHeaderSearch(false);
    setCurrentTab(tab);
    if (tab === "Book") {
      router.push("/");
    } else if (tab === "Manage Booking") {
      router.push("/booking/manage-booking");
    } else {
      router.push("/booking/online-check-in");
    }
  };

  const headerInnerRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideCallback = useCallback(() => {
    setShowHeaderSearch(false);
  }, []);

  useOutsideClick(headerInnerRef, handleClickOutsideCallback);

  const renderHeaderSearch = () => {
    return (
      <div
        className={`absolute inset-x-0 top-0 transition-all will-change-[transform,opacity] ${
          showHeaderSearch
            ? "visible"
            : "-translate-x-0 -translate-y-[90px] scale-x-[0.395] scale-y-[0.6] opacity-0 invisible pointer-events-none"
        }`}>
        <div className={`w-full max-w-4xl mx-auto pb-6`}>
          <HeaderSearch defaultTab={currentTab} onTabChange={handleTabChange} />
        </div>
      </div>
    );
  };

  const renderHeaderNavBar = () => {
    return (
      <div
        className={`w-full relative flex items-center justify-between border border-neutral-200 rounded-full shadow hover:shadow-md transition-all ${
          showHeaderSearch
            ? "-translate-x-0 translate-y-20 scale-x-[2.55] scale-y-[1.8] opacity-0 pointer-events-none invisible"
            : "visible"
        }`}>
        <div className="flex items-center font-medium text-sm">
          <div
            className={`flex items-center cursor-pointer ${currentTab === "Book" ? "text-primary-700" : ""}`}
            onClick={() => router.push("/")}>
            <FaPlaneDeparture className="w-5 h-5 ml-5" />
            <span className="block pl-2 pr-4 py-3">Book</span>
          </div>

          <span className="h-5 w-[1px] bg-neutral-300"></span>

          <div
            className={`flex items-center cursor-pointer ${currentTab === "Manage Booking" ? "text-primary-700" : ""}`}
            onClick={() => setShowHeaderSearch(false)}>
            <GoChecklist className="w-5 h-5 ml-4" />
            <span
              onClick={() => router.push("/booking/manage-booking")}
              className="block pl-2 pr-4 cursor-pointer py-3 ">
              Manage Booking
            </span>
          </div>

          <span className="h-5 w-[1px] bg-neutral-300"></span>

          <div
            className={`flex items-center cursor-pointer ${currentTab === "Online Check-in" ? "text-primary-700" : ""}`}
            onClick={() => setShowHeaderSearch(false)}>
            <TiTicket className="w-5 h-5 ml-4" />
            <span
              onClick={() => router.push("/booking/online-check-in")}
              className="block pl-2 pr-4 cursor-pointer py-3">
              Online Check-in
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 ml-auto pr-2 cursor-pointer" onClick={() => setShowHeaderSearch(true)}>
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500  text-white">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`nc-Header fixed z-40 top-0 inset-0 bg-black/30 transition-opacity will-change-[opacity] ${
          showHeaderSearch ? "visible" : "invisible opacity-0 pointer-events-none"
        }`}></div>
      <header
        ref={headerInnerRef}
        className={`sticky top-0 z-40 shadow-sm border-b border-gray-100 nc-header-bg ${className}`}>
        <div
          className={`bg-white absolute h-full inset-x-0 top-0 transition-transform will-change-[transform,opacity]
          ${showHeaderSearch ? "duration-75 scale-y-[4.4]" : ""}`}></div>
        <div className="relative px-4 lg:container h-[88px] flex">
          <div className="flex-1 flex justify-between">
            <div className="relative z-10 hidden md:flex flex-1 items-center">
              <Logo className="w-16" />
            </div>

            <div className="flex flex-[2] lg:flex-none mx-auto">
              <div className="flex-1 overflow-hidden lg:flex self-center">{renderHeaderNavBar()}</div>
              {renderHeaderSearch()}
            </div>

            <div className="hidden md:flex relative z-10 flex-1 justify-end text-neutral-700 items-center">
              <div className="flex space-x-2">
                <SignInButton onClick={redirectToSignIn} />
                <MenuBar />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
