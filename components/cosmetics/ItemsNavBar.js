import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ItemsNavBar() {
  const router = useRouter();
  const [categories] = useState([
    { name: `NEW COSMETICS`, link: "cosmetics/new" },
    { name: `ALL COSMETICS`, link: "cosmetics" },
  ]);
  
  const [selected, setSelected] = useState(categories[0]);
  return (
    <div className="w-full max-w-md px-8 pb-20 sm:px-0">
      <ul className="flex justify-center space-x-4 p-1">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`w-1/3 py-2.5 active:text-slate-700 leading-5 text-lg text-center cursor-pointer text-white ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none ${router.pathname == `/${category.link}` ? 'bg-white shadow text-slate-700': 'text-white hover:bg-white/[0.12] hover:text-white'}`}>
            <Link href={`/${category.link}`}>
              <a className="py-3">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
