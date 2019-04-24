import map from "ramda/src/map";
import add from "ramda/src/add";
import props from "ramda/src/props";
import prop from "ramda/src/prop";
import pipe from "ramda/src/pipe";
import find from "ramda/src/find";
import propEq from "ramda/src/propEq";

import { indexedReduce } from "../../helpers";

const SCRAPER = process.env.SCRAPER;

const config = require("../../../config");

const {
  API_URL,
  createApiMatchesEndpoint,
  teamVariables,
  teamsVariables,
  teamNameVariable,
  matchVariables,
  numberOfRounds
} = config.scrapers[SCRAPER];

const createRound = add(1);

const getSingleMatch = ({ uuid, game }) => {
  const API_MATCHES_ENDPOINT = createApiMatchesEndpoint({ uuid, game });

  return new Promise((resolve, reject) => {
    fetch(`${API_URL}${API_MATCHES_ENDPOINT}`, {
      credentials: "omit",
      headers: {
        accept: "application/json, text/plain, */*"
      },
      referrer: window.location.href,
      referrerPolicy: "unsafe-url",
      body: null,
      method: "GET",
      mode: "cors"
    })
      .then(data => data.json().then(resolve))
      .catch(reject);
  });
};

const mapSingleMatch = ({ currentRoundGames, teams }) =>
  map(currentMatch => {
    const mapTeams = pipe(
      props(teamsVariables),
      ([principal, visitor]) => {
        const getTeamInfo = props(teamVariables);

        const getTeamId = currentSlug =>
          pipe(
            find(propEq("slug", currentSlug)),
            prop("id")
          )(teams);

        const [principalName, principalSlug] = getTeamInfo(principal);

        const [visitorName, visitorSlug] = getTeamInfo(visitor);

        return {
          principal: {
            id: getTeamId(principalSlug),
            principalName,
            principalSlug
          },
          visitor: {
            id: getTeamId(visitorSlug),
            visitorName,
            visitorSlug
          }
        };
      }
    );

    const [
      date,
      time,
      principalScoreboard,
      visitorScoreboard,
      currentTeams,
      stadium
    ] = props(matchVariables, currentMatch);

    return {
      date,
      time,
      principalScoreboard,
      visitorScoreboard,
      teams: mapTeams(currentTeams),
      stadium: prop(teamNameVariable, stadium)
    };
  }, currentRoundGames);

const mapResults = teams =>
  indexedReduce((acc, currentRoundGames, index) => {
    const currentRound = createRound(index);

    const currentRoundConfig = {
      title: `${currentRound}ª Rodada`,
      matches: mapSingleMatch({ currentRoundGames, teams })
    };

    return {
      ...acc,
      [currentRound]: currentRoundConfig
    };
  }, {});

const getMatches = (teams = []) => {
  const uuid = contentResource.tUUID;

  const games = [...Array(numberOfRounds).keys()];

  const matches = () =>
    map(currentRound => {
      const game = createRound(currentRound);
      return getSingleMatch({ uuid, game });
    }, games);

  return new Promise((resolve, reject) =>
    Promise.all(matches())
      .then(mapResults(teams))
      .then(resolve)
      .catch(reject)
  );
};

window.getMatches = getMatches;
export default getMatches;
