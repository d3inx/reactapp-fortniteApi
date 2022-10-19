import { createContext } from "react";
import { useState } from "react";
import PlayerStats from "../components/playerstats/PlayerStats";

export const AppContext = createContext();

export default function Main() {
  const [playerInfo, setPlayerInfo] = useState({
    playerName: "",
    playerStats: [],
    platerPlatform: "epic",
  });
  return (
    <AppContext.Provider value={{ playerInfo, setPlayerInfo }}>
      <PlayerStats />
    </AppContext.Provider>
  );
}