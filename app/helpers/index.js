import prop from "ramda/src/prop";
import addIndex from "ramda/src/addIndex";
import map from "ramda/src/map";
import reduce from "ramda/src/reduce";

export const getTextContent = prop("textContent");
export const indexedMap = addIndex(map);
export const indexedReduce = addIndex(reduce);
