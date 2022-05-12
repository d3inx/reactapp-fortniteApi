import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"

const NewItems = ({ newItems }) => {
  const [items, setItems] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fortnite-api.com/v2/cosmetics/br/new", {
          headers: {
            Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
          },
        })
        .then((Response) =>
          setItems(
            Response.data.data.items.filter(
              (item) => item.name.toUpperCase() !== "TBD"
            )
          )
        );
    };
    fetchData();
  }, []);
  return (
    <>
      {items !== undefined ? (
        <div className="flex flex-row flex-wrap justify-center">
          {items.map((item) => (
            <Link href={`/${item.type.value.replace(' ' , '-')}/${item.name.replace(' ' , '-').toLowerCase()}`}>
              <a className="w-1/2 md:w-1/4 lg:w-1/6" key={item.id}>
              <div className="m-4 ring-2 ring-gray-900">
                <Image src={item.images.icon} width={512} height={512} layout='responsive' />
                <div className="bg-zinc-700/60 p-2 text-white flex flex-col text-center text-sm">
                  <span>{item.name}</span>
                  <span className="mt-2 p-2 bg-gray-900">{item.type.displayValue}</span>
                </div>
              </div>
            </a>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NewItems;
