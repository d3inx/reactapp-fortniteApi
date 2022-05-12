import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroller";
import FilterItem from "./FilterItem";
import NotFound from "../playerstats/NotFound";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [listItem, setListItem] = useState();
  const [itemIndex, setItemIndex] = useState(50);
  const [hasMoreItems, setHasMoreItem] = useState(true);
  const [itemStat , setItemStat] = useState(true)
  const loadMoreItems = async () => {
    if (items.length > 0) {
      if (itemIndex >= items.length) {
        setHasMoreItem(false);
      } else {
        setItemIndex(itemIndex + 50);
      }
    } else {
      if (items.length > 0) {
        setHasMoreItem(false);
        return;
      }
      if (hasMoreItems) {
        await axios
          .get("https://fortnite-api.com/v2/cosmetics/br", {
            headers: {
              Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
            },
          })
          .then((Response) => {
            const typesArr = ["All"];
            const rarityArr = ["All"];
            Response.data.data
              .filter(
                (item) =>
                  item.type.displayValue !== "Banner" &&
                  item.type.displayValue !== "null" &&
                  item.name !== null && 
                  item.name !== 'TBD'
              )
              .map((item) => {
                if (!typesArr.includes(item.type.displayValue)) {
                  typesArr.push(item.type.displayValue);
                } else if (!rarityArr.includes(item.rarity.displayValue)) {
                  rarityArr.push(item.rarity.displayValue);
                }
              });
              
            setItems(
              Response.data.data.filter(
                (item) =>
                  item.type.displayValue !== "Banner" &&
                  item.type.displayValue !== "null" &&
                  item.name !== null && 
                  item.name !== 'TBD'
              )
            );
            setListItem({ type: typesArr, rarity: rarityArr });
          });
      }
    }
  };
  let scrollItems = [];

  items
    .filter((data, index) => index < itemIndex)
    .map((item) => {
      scrollItems.push(
        <Link href={`/${item.type.value.replace(' ' , '-')}/${item.name.replace(' ' , '-').toLowerCase()}`}>
          <a className="w-1/2 md:w-1/4 lg:w-1/6 cursor-pointer" key={item.id}>
            <div className="m-4 ring-2 ring-gray-900">
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
                <div>{item.name}</div>
                <span className="mt-2 p-2 bg-gray-900">
                  {item.type.displayValue}
                </span>
              </div>
            </div>
          </a>
        </Link>
      );
    });
  return (
    <>
      <FilterItem
        items={items}
        setItemStat={setItemStat}
        setItems={setItems}
        listItem={listItem}
        setListItem={setListItem}
      />
      {
        itemStat === true ? (
          <InfiniteScroll
        pageStart={0}
        hasMore={hasMoreItems}
        loadMore={loadMoreItems}
        style={{
          width: "100%",
        }}
        loader={
          <div
            className="loader w-full flex justify-center mt-12 text-6xl text-white"
            key={0}
          >
            LOADING ...
          </div>
        }
      >
        <div className="w-full flex flex-row flex-wrap justify-center">
          {scrollItems}
        </div>
      </InfiniteScroll>
        )
        : <NotFound errText={'COSMETIC NOT FOUND'} />
      }
      
    </>
  );
};

export default AllItems;
