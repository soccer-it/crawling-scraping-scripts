import getTeams from "./teams";
import getRanking from "./ranking";
import getMatches from "./matches";

async function scrapeData() {
  const teams = getTeams();
  const ranking = getRanking(teams);
  const rounds = await getMatches(teams);

  return {
    info: {
      title: "Campeonato Brasileiro 2019"
    },
    teams,
    ranking,
    rounds
  };
}

window.scrapeData = scrapeData;
export default scrapeData;
