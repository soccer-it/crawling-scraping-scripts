import safedom from "safedom";
import prop from "ramda/src/prop";
import map from "ramda/src/map";
import ifElse from "ramda/src/ifElse";
import pipe from "ramda/src/pipe";
import includes from "ramda/src/includes";
import split from "ramda/src/split";
import last from "ramda/src/last";
import __ from "ramda/src/__";

import {
  getTextContent,
  indexedReduce,
  getClassList,
  getConfig
} from "../../helpers";

const config = getConfig();

const { statsMapper } = config;

const mapPossibleResults = {
  e: "draw",
  v: "win",
  d: "defeat"
};

const getChampionshipStats = stats => {
  const STATS_SELECTOR = ".tabela__pontos .tabela__head--coluna";

  const byChampionship = indexedReduce((acc, stat, index) => {
    const stateName = prop(getTextContent(stat), statsMapper);

    return {
      ...acc,
      [stateName]: stats[index]
    };
  }, {});

  return safedom
    .selectAll(STATS_SELECTOR)
    .map(byChampionship)
    .getOrElse("");
};

const getRanking = teams => {
  const CURRENT_STATS_SELECTOR =
    ".tabela__pontos .classificacao__tabela--linha";
  const SINGLE_STAT_SELECTOR = ".classificacao__pontos";
  const LAST_RESULT_STAT = "classificacao__pontos--ultimos_jogos";
  const CURRENT_RESULT_STATE = `classificacao__ultimos_jogos`;

  const getLastResultState = stat =>
    safedom
      .select(`.${CURRENT_RESULT_STATE}`, stat)
      .map(
        pipe(
          getClassList,
          prop("1"),
          pipe(
            split("--"),
            last,
            prop(__, mapPossibleResults)
          )
        )
      )
      .getOrElse("");

  const bySingleStat = nodes =>
    safedom
      .selectAll(SINGLE_STAT_SELECTOR, nodes)
      .map(
        map(
          ifElse(
            pipe(
              getClassList,
              includes(LAST_RESULT_STAT)
            ),
            getLastResultState,
            t => ~~getTextContent(t)
          )
        )
      )
      .getOrElse([]);

  const byStat = map(bySingleStat);

  const stats = safedom
    .selectAll(CURRENT_STATS_SELECTOR)
    .map(byStat)
    .getOrElse([]);

  return indexedReduce(
    (acc, team, index) => {
      const id = prop("id", team);
      const currentStats = getChampionshipStats(stats[index]);

      return {
        ...acc,
        [id]: {
          ...team,
          stats: currentStats
        }
      };
    },
    {},
    teams
  );
};

window.getRanking = getRanking;
export default getRanking;
