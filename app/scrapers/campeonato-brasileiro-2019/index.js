import getTeams from "./teams";
import getRanking from "./ranking";

const scrapeData = () => {
  const teams = getTeams();

  return {
    info: {
      title: "Campeonato Brasileiro 2019"
    },
    teams,
    ranking: getRanking(teams)
  };
};

window.scrapeData = scrapeData;
export default scrapeData;
