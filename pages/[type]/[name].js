import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const getServerSideProps = async ({ params }) => {
  let itemData;
  await axios
    .get(
      `https://fortnite-api.com/v2/cosmetics/br/search?type=${
        params.type
      }&name=${params.name.replace("-", " ")}`,
      {
        headers: {
          Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
        },
      }
    )
    .then((Response) => {
      itemData = Response.data.data;
    });
  return {
    props: {
      itemData,
    },
  };
};

const ItemsList = ({ itemData }) => {
  const [itemSet, setItemSet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      itemData.set !== null
        ? await axios
            .get(
              `https://fortnite-api.com/v2/cosmetics/br/search/all?set=${itemData.set.value}`,
              {
                headers: {
                  Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
                },
              }
            )
            .then((Response) => {
              setItemSet(Response.data.data);
            })
        : null;
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-zinc-700/60 w-full flex flex-wrap rounded-3xl p-4">
        <div className="flex flex-col text-white text-lg w-full md:w-2/3">
          <div className="w-full flex flex-wrap md:flex-nowrap text-center md:text-left">
            <div className="bg-cover px-12 md:px-0 md:mr-4 w-full md:w-1/4">
              <Image
                src={itemData.images.icon}
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
            <div>
              <span className="text-2xl">{itemData.name.toUpperCase()}</span>
              <div>
                <span>Description : {itemData.description}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className={"bg-neutral-900 mt-2 p-2 bg-cover"}>
                  {itemData.rarity.displayValue}
                </div>
                <span className="pl-3">
                  {itemData.type.displayValue.toUpperCase()}
                </span>
              </div>
              <div>
                {itemData.introduction !== null
                  ? itemData.introduction.text
                  : "___"}
              </div>
            </div>
          </div>
          <div className="text-2xl mt-4">All Item From This Set :</div>
          <div className="flex flex-wrap">
            {itemSet.map((item) => (
              <Link
                href={`/${item.type.value.replace(" ", "-")}/${item.name
                  .replace(" ", "-")
                  .toLowerCase()}`}
              >
                <a
                  className="w-1/2 md:w-1/4 lg:w-1/6 cursor-pointer"
                  key={item.id}
                >
                  <div className="m-2 md:m-4 ring-2 ring-gray-900">
                    <Image
                      src={
                        item.images.icon !== null
                          ? item.images.icon
                          : item.images.smallIcon
                      }
                      width={512}
                      height={512}
                      layout="responsive"
                    />
                    <div className="bg-zinc-700/60 p-2 text-white flex flex-col text-center text-sm">
                      <a>{item.name}</a>
                      <span className="mt-2 p-2 bg-gray-900">
                        {item.type.displayValue}
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4 text-white">
          <div className="text-left pb-2">SHOP HISTORY :</div>
          <div className=" h-80 py-4 overflow-y-auto scrollbar-thumb-zinc-900 scrollbar-thin bg-zinc-700/20 rounded-3xl text-center">
            {itemData.shopHistory !== null ? (
              itemData.shopHistory.map((item) => (
                <div className="tabular-nums">{item.slice(0, 10)}</div>
              ))
            ) : (
              <div>Not Available Data for This Item</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsList;