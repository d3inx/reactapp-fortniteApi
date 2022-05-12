import { useContext } from "react";
import { AppContext } from "../../pages";
const PlayerChart = () => {
  const context = useContext(AppContext);
  const { playerInfo } = context;
  const { playerStats } = playerInfo;
  return (
    <>
      {playerStats.account !== undefined ? (
        <div className="flex flex-col md:flex-row mt-12 px-4 md:px-0 justify-center w-full">
          <div className="flex flex-col w-full md:w-1/3 h-full space-y-4">
            <div className="overall flex flex-col">
              <div className="bg-lime-300/60 text-white">
                <div className="bg-lime-600 w-1/3 text-center shadow h-full text-white">
                  OVERALL
                </div>
              </div>
              <div className="bg-black/40 text-white min-h-full">
                <div className="text-3xl text-center py-8 ">
                  {playerStats.account.name}
                  <div className="mt-2">
                    <div className="text-sm">
                      SEASON LEVEL : {playerStats.battlePass.level}
                    </div>
                  </div>
                </div>
                <div className="text-center my-2">
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.wins}</div>
                      <span className="text-base text-lime-300/50">WINS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.top3}</div>
                      <span className="text-base text-lime-300/50">TOP 3</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.top10}</div>
                      <span className="text-base text-lime-300/50">TOP 10</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.top25}</div>
                      <span className="text-base text-lime-300/50">TOP 25</span>
                    </li>
                  </ul>
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.matches}</div>
                      <span className="text-base text-lime-300/50">
                        MATCHES
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.kills}</div>
                      <span className="text-base text-lime-300/50">KILLS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.deaths}</div>
                      <span className="text-base text-lime-300/50">DEATHS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.overall.kd}</div>
                      <span className="text-base text-lime-300/50">KD</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ltm flex flex-col">
              <div className="bg-gray-400/70 text-white">
                <div className="bg-gray-500 w-1/3 text-center shadow h-full text-white">
                  LTM
                </div>
              </div>
              <div className="bg-black/40 text-white min-h-full">
                <div className="text-center my-2">
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.ltm.matches}</div>
                      <span className="text-base text-gray-300/50">
                        MATCHES
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.ltm.wins}</div>
                      <span className="text-base text-gray-300/50">WINS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.ltm.kd}</div>
                      <span className="text-base text-gray-300/50">KD</span>
                    </li>
                    
                  </ul>
                  <ul className="flex w-full justify-around">
                      <li className="flex flex-col">
                        <div>{playerStats.stats.all.ltm.kills}</div>
                        <span className="text-base text-gray-300/50">
                          KILLS
                        </span>
                      </li>
                      <li className="flex flex-col">
                        <div>{playerStats.stats.all.ltm.deaths}</div>
                        <span className="text-base text-gray-300/50">
                          DEATHS
                        </span>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mods md:pl-8 flex flex-col mt-4 md:mt-0 w-full md:w-2/3 space-y-4">
            <div className="solo flex flex-col w-full">
              <div className="bg-sky-300/60 text-white">
                <div className="bg-sky-600 w-1/3 text-center shadow h-full text-white">
                  SOLO
                </div>
              </div>
              <div className="bg-black/40 text-white">
                <div className="text-center my-2">
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.matches}</div>
                      <span className="text-base text-sky-300/60">MATCHES</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.kills}</div>
                      <span className="text-base text-sky-300/60">KILLS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.deaths}</div>
                      <span className="text-base text-sky-300/60">DEATHS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.kd}</div>
                      <span className="text-base text-sky-300/60">KD</span>
                    </li>
                  </ul>
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.wins}</div>
                      <span className="text-base text-sky-300/60">WINS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.top10}</div>
                      <span className="text-base text-sky-300/60">TOP 10</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.solo.top25}</div>
                      <span className="text-base text-sky-300/60">TOP 25</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dous flex flex-col w-full">
              <div className="bg-purple-400/60 text-white">
                <div className="bg-purple-600 w-1/3 text-center shadow h-full text-white">
                  DOUS
                </div>
              </div>
              <div className="bg-black/40 text-white">
                <div className="text-center my-2">
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.matches}</div>
                      <span className="text-base text-purple-300/60">
                        MATCHES
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.kills}</div>
                      <span className="text-base text-purple-300/60">
                        KILLS
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.deaths}</div>
                      <span className="text-base text-purple-300/60">
                        DEATHS
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.kd}</div>
                      <span className="text-base text-purple-300/60">KD</span>
                    </li>
                  </ul>
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.wins}</div>
                      <span className="text-base text-purple-300/60">WINS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.top5}</div>
                      <span className="text-base text-purple-300/60">
                        TOP 5
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.duo.top12}</div>
                      <span className="text-base text-purple-300/60">
                        TOP 12
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="squad flex flex-col w-full">
              <div className="bg-amber-300/60 text-white">
                <div className="bg-amber-500 w-1/3 text-center shadow h-full text-white">
                  SQUAD
                </div>
              </div>
              <div className="bg-black/40 text-white">
                <div className="text-center my-2">
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.matches}</div>
                      <span className="text-base text-amber-300/50">
                        MATCHES
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.kills}</div>
                      <span className="text-base text-amber-300/50">KILLS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.deaths}</div>
                      <span className="text-base text-amber-300/50">
                        DEATHS
                      </span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.kd}</div>
                      <span className="text-base text-amber-300/50">KD</span>
                    </li>
                  </ul>
                  <ul className="flex w-full justify-around">
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.wins}</div>
                      <span className="text-base text-amber-300/50">WINS</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.top3}</div>
                      <span className="text-base text-amber-300/50">TOP 3</span>
                    </li>
                    <li className="flex flex-col">
                      <div>{playerStats.stats.all.squad.top6}</div>
                      <span className="text-base text-amber-300/50">TOP 6</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PlayerChart;
