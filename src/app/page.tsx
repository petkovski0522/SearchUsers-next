import Image from "next/image";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import { useState } from "react";
import Search from "./components/Search";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full  p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all  dark:bg-slate-900 ">
      <div className="  mx-auto flex w-full max-w-[600px] flex-col gap-8  rounded p-2">
        <section className="flex justify-between gap-3 border-2 border-solid  border-dark:bg-slate-900">
          <p className="text-xl font-semibold">DevExplorer</p>

          <ThemeToggleBtn />
        </section>
      </div>
    </div>
  );
}
