import safedom from "safedom";
import map from "ramda/src/map";
import toLower from "ramda/src/toLower";
import { getTextContent } from "../../helpers";

const shorthash = require("shorthash");

const getTeams = () => {
  const TEAMS_SELECTOR = `.classificacao__equipes.classificacao__equipes--time`;
  const TEAM_NAME_SELECTOR = `.classificacao__equipes--nome`;
  const TEAM_NAME_SLUG = `.classificacao__equipes--sigla`;

  const byTeam = map(team => {
    const getListElementsContent = selector =>
      safedom
        .select(selector, team)
        .map(getTextContent)
        .getOrElse("");

    const name = getListElementsContent(TEAM_NAME_SELECTOR);

    const slug = getListElementsContent(TEAM_NAME_SLUG);

    const id = shorthash.unique(`${toLower(name)}_${toLower(slug)}`);

    return {
      name,
      slug,
      id
    };
  });

  return safedom
    .selectAll(TEAMS_SELECTOR)
    .map(byTeam)
    .getOrElse([]);
};

window.getTeams = getTeams;
export default getTeams;
