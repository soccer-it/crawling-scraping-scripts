import safedom from "safedom";
import prop from "ramda/src/prop";
import map from "ramda/src/map";

import { getTextContent, indexedReduce } from "../../helpers";

const getChampionshipStats = stats => {
  const STATS_SELECTOR = ".tabela__pontos .tabela__head--coluna";

  const byChampionship = indexedReduce(
    (acc, stat, index) => ({
      ...acc,
      [getTextContent(stat)]: stats[index]
    }),
    {}
  );

  return safedom
    .selectAll(STATS_SELECTOR)
    .map(byChampionship)
    .getOrElse("");
};

const getRanking = teams => {
  const CURRENT_STATS_SELECTOR =
    ".tabela__pontos .classificacao__tabela--linha";
  const SINGLE_STAT_SELECTOR = ".classificacao__pontos";

  const bySingleStat = nodes =>
    safedom
      .selectAll(SINGLE_STAT_SELECTOR, nodes)
      .map(map(t => ~~getTextContent(t)))
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
