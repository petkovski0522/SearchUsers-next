import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all  dark:bg-slate-900 ">
      <div className="  mx-auto flex w-full max-w-[600px] flex-col gap-8  rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">DevExplorer</p>
          <p>Light</p>
        </section>
      </div>
    </div>
  );
}
