/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggleBtn from "./components/ThemeToggleBtn";
import Search from "./components/Search";
import { GitHubUser } from "./types";

import { IoLocationOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import dateFormte from "dateformat";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("petkovski0522");

  const { isLoading, error, data, refetch } = useQuery<GitHubUser>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://api.github.com/users/${userName}`).then((res) =>
        res.json()
      ),
  });
  console.log("data-", data);

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center ">
        <p className="animate-bounce">Loading...</p>
      </div>
    );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    refetch();
  }

  return (
    <div className="flex min-h-screen w-full p-1.5 sm:p-4   pt-10 sm:pt-12 transition-all  dark:bg-slate-900 ">
      {/* container */}
      <div className="  mx-auto flex w-full max-w-[600px] flex-col gap-8  rounded p-2">
        <section className="flex  justify-between gap-3 ">
          <p className="text-xl font-semibold">devfinder</p>
          <ThemeToggleBtn />
        </section>

        <section className="flex flex-col gap-6">
          <Search
            onChange={(e) => setUserName(e.target.value)}
            onSubmit={handleSubmit}
            value={userName}
          />
          {data?.message ? (
            <div className=" flex  w-full  flex-col gap-5 rounded-lg  bg-white px-4 py-8 text-center text-red-400 dark:bg-slate-800">
              User Not Found
            </div>
          ) : (
            <main className="flex w-full flex-col gap-5 rounded-lg  dark:bg-slate-800 px-4 py-8  min-h-[200px]">
              <section className="flex gap-4">
                <Image
                  width={200}
                  height={200}
                  className=" h-20 w-20 rounded-full "
                  src={data?.avatar_url ?? ""}
                  alt="user-img"
                />

                <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                  <div>
                    {/*name  */}
                    <h1>{data?.name}</h1>
                    {/* user id */}
                    <Link
                      target="_blank"
                      className="text-blue-500  hover:underline text-sm transition-all"
                      href={`https://github.com/${data?.login}/`}
                    >
                      @{data?.login}
                    </Link>
                  </div>

                  <p className="">
                    <span>Joined</span>
                    <span> {dateFormte(data?.created_at, "dd mmm yyyy")} </span>
                  </p>
                </section>
              </section>

              <section className="flex flex-col gap-5">
                <p>
                  {data?.bio ?? (
                    <span className="opacity-60">This profile has no bio</span>
                  )}
                </p>

                <div className="flex justify-between gap-3 rounded-lg  px-6 py-4 dark:bg-slate-900  min-h-[50px]  ">
                  <div className="flex flex-col items-center gap-2 ">
                    <p className="text-xs opacity-60">Repos</p>
                    <p className=" text-sm font-bold sm:text-base">
                      {data?.public_repos}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 ">
                    <p className="text-xs opacity-60">Followers</p>
                    <p className=" text-sm font-bold sm:text-base">
                      {data?.followers}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-2 ">
                    <p className="text-xs opacity-60">Following</p>
                    <p className=" text-sm font-bold sm:text-base">
                      {data?.following}
                    </p>
                  </div>
                </div>
                {/* address and extra links */}
                <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
                  {/* item 1 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <IoLocationOutline className="text-xl" />
                    <p>
                      {data?.location ?? (
                        <span className="opacity-60">Not Available</span>
                      )}{" "}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <IoIosLink className="text-xl" />
                    {data?.blog ? (
                      <Link
                        title={data?.blog}
                        className="hover:underline opacity-60 max-w-[220px] overflow-hidden text-ellipsis "
                        href={data?.blog ?? "#"}
                      >
                        {data?.blog}{" "}
                      </Link>
                    ) : (
                      <span className="opacity-60">Not Available</span>
                    )}{" "}
                  </div>
                  {/* item 3 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <FaTwitter className="text-xl" />
                    <p>
                      {data?.company ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                  {/* item 4 */}
                  <div className="flex items-center gap-2">
                    {/* icon */}
                    <BsFillBuildingsFill className="text-xl" />

                    <p>
                      {data?.company ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                </div>
              </section>
            </main>
          )}
        </section>
      </div>
    </div>
  );
}
