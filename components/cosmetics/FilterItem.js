import axios from "axios";
import { useState } from "react";
import Toggle from "../layout/Toggle";
import FilterListBox from "./FilterListBox";

const FilterItem = ({ setItems, setItemStat , listItem, setListItem }) => {
  const [inputVal, setInputVal] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [selected, setSelected] = useState({
    type: "All",
    rarity: "All",
  });

  const filterData = async () => {
    if (
      inputVal === "" &&
      selected.type === "All" &&
      selected.rarity === "All"
    ) {
      await axios
        .get("https://fortnite-api.com/v2/cosmetics/br", {
          headers: {
            Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
          },
        })
        .then((Response) => {
          setItemStat(true)
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
          setListItem({ type: typesArr, rarity: rarityArr });
          setItems(
            enabled ? Response.data.data.filter(
              (item) =>
                item.type.displayValue !== "Banner" &&
                item.type.displayValue !== "null" && 
                item.name !== null && 
                item.name !== 'TBD'
            ).sort((a, b) => (a.type.value > b.type.value ? 1 : -1))
            : Response.data.data.filter(
              (item) =>
                item.type.displayValue !== "Banner" &&
                item.type.displayValue !== "null" && 
                item.name !== null && 
                item.name !== 'TBD'
            )
          );
        });
       
    } else {
      await axios
        .get(
          `https://fortnite-api.com/v2/cosmetics/br/search/all?name=${inputVal}&displayType=${
            selected.type === "All" ? "" : selected.type
          }&displayRarity=${selected.rarity === "All" ? "" : selected.rarity}`,
          {
            headers: {
              Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
            },
          }
        )
        .then((Response) => {
          setItemStat(true)
          setItems(
            enabled ? Response.data.data.filter(
              (item) =>
                item.type.displayValue !== "Banner" &&
                item.type.displayValue !== "null" &&
                item.name !== null && 
                item.name !== 'TBD'
            ).sort((a, b) => (a.type.value > b.type.value ? 1 : -1))
            : Response.data.data.filter(
              (item) =>
                item.type.displayValue !== "Banner" &&
                item.type.displayValue !== "null" && 
                item.name !== null && 
                item.name !== 'TBD'
            )
          );
        })
        .catch(err => setItemStat(false))
    }
  };

  return (
    <>
      {listItem !== undefined ? (
        <div className="flex flex-wrap px-4 md:px-0 w-full justify-evenly mt-20">
          <input
            type="text"
            className="outline-none w-full md:w-1/4 px-2"
            placeholder="ITEM NAME"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />

          <FilterListBox
            listItem={listItem.type}
            selectedType={selected.type}
            setSelected={setSelected}
          />

          <FilterListBox
            listItem={listItem.rarity}
            selectedRarity={selected.rarity}
            setSelected={setSelected}
          />
          <button
            type="submit"
            className="px-4 bg-amber-300"
            onClick={filterData}
          >
            SUBMIT
          </button>
          <div className="flex">
            <span className="flex items-center text-white ">ASC</span>
            <Toggle setItems={setItems} enabled={enabled} setEnabled={setEnabled} />
            <span className="flex items-center text-white ">DESC</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilterItem;
