import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [categories] = useState([
    { name: `PLAYER STATS`, link: "" },
    { name: `COSMETICS`, link: "cosmetics", link2: "cosmetics/new" },
    { name: `ITEM SHOP`, link: "shops" },
  ]);
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <ul className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        {categories.map((category) => (
          <Link href={`/${category.link}`} key={category.name}>
            <a
              key={category.name}
              className={`w-full rounded-lg active:text-slate-700 text-sm font-medium leading-5 text-center cursor-pointer text-white ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ${
                router.pathname == `/${category.link}`
                  ? "bg-white shadow text-slate-700"
                  : router.pathname == `/${category.link2}`
                  ? "bg-white shadow text-slate-700"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              }`}
            >
              <div className="py-2.5">{category.name}</div>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}
