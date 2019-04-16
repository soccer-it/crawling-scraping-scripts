import safedom from "safedom";
import addIndex from "ramda/src/addIndex";
import map from "ramda/src/map";
import prop from "ramda/src/prop";
import add from "ramda/src/add";

window.getTeams = () => {
  const TEAMS_SELECTOR = `.classificacao__equipes.classificacao__equipes--time`;
  const TEAM_NAME_SELECTOR = `.classificacao__equipes--nome`;
  const TEAM_NAME_SLUG = `.classificacao__equipes--sigla`;

  const mapIndexed = addIndex(map);

  const getTextContent = prop("textContent");

  const byTeam = mapIndexed((team, index) => {
    const id = add(index, 1);

    const getElementText = selector =>
      safedom
        .select(selector, team)
        .map(getTextContent)
        .getOrElse("");

    const name = getElementText(TEAM_NAME_SELECTOR);

    const slug = getElementText(TEAM_NAME_SLUG);

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
