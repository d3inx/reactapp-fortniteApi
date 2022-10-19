import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../pages";
import ListBox from "../layout/ListBox";
import NotFound from "./NotFound";
import PlayerChart from "./PlayerChart";

const PlayerStats = () => {
  const context = useContext(AppContext);
  const { playerInfo, setPlayerInfo } = context;

  const [statChart, setStatChart] = useState();

  const listItem = [
    { name: "PC" , id : 'epic' },
    { name: "XBOX" , id : 'xbl' },
    { name: "PSN" , id : 'psn' },
  ];

  const getPlayerData = async () => {
    await axios
      .get(
        `https://fortnite-api.com/v2/stats/br/v2?name=${playerInfo.playerName}&accountType=${playerInfo.platerPlatform}`,
        {
          headers: {
            Authorization: `f4574d7f-6b90-419c-83bb-1acb4924eac0`,
          },
        }
      )
      .then((Response) =>{
        setStatChart(true);
        setPlayerInfo((prevState) => ({
          ...prevState,
          playerStats: Response.data.data,
        }))}
      )
      .catch(err => setStatChart(false));
  };
  return (
    <>
      <div className="flex flex-wrap w-full px-4 md:px-0 justify-evenly mt-20">
        <input
          type="text"
          className="outline-none w-full md:w-1/4 px-2"
          placeholder="UserName... Try d3inx"
          value={playerInfo !== undefined ? playerInfo.playerName : ""}
          onChange={(e) => {
            setPlayerInfo((prevState) => ({
              ...prevState,
              playerName: e.target.value,
            }));
          }}
        />

        <ListBox listItem={listItem} />

        <button
          type="submit"
          className="px-4 py-1 bg-amber-300"
          onClick={getPlayerData}
        >
          SUBMIT
        </button>
      </div>
      {statChart === true ? <PlayerChart /> : <NotFound errText={statChart === false ? 'NOT FOUND' : 'SEARCH  PLAYER'} />}
    </>
  );
};

export default PlayerStats;
