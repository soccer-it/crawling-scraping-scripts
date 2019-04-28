import prop from "ramda/src/prop";
import addIndex from "ramda/src/addIndex";
import map from "ramda/src/map";
import reduce from "ramda/src/reduce";

export const getTextContent = prop("textContent");
export const indexedMap = addIndex(map);
export const indexedReduce = addIndex(reduce);
export const getClassList = prop("classList");
export const getConfig = () => {
  const SCRAPER = process.env.SCRAPER;
  const config = require("../../config");

  return config.scrapers[SCRAPER];
};
