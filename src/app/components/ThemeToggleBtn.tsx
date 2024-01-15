import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";

type Props = {};

export default function ThemeToggleBtn({}: Props) {
  return (
    <div className="flex items-center gap-2">
      <p className="team-sm">Light</p>
      <LuMoonStar /> <IoSunnyOutline />
    </div>
  );
}
