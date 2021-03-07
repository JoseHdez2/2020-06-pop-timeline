import moment from "moment";
import randomColor from "randomcolor";
import gamesZelda from "./data/games-zelda.json";
import moviesStarWars from "./data/movies-star-wars.json";
import versionsWindows from "./data/versions-windows.json";
import usPresidents from "./data/us-presidents.json";
import gamesPokemon from "./data/games-pokemon.json";
import gamesMario from "./data/games-mario.json";
import consolesNtdo from "./data/consoles-nintendo.json";
import consolesMsft from "./data/consoles-microsoft.json";
import consolesSega from "./data/consoles-sega.json";
import consolesSony from "./data/consoles-sony.json";
import handheldsNtdo from "./data/handhelds-nintendo.json";
import handheldsSony from "./data/handhelds-sony.json";
import versionsAndroid from "./data/versions-android.json";

let randomSeed = Math.floor(Math.random() * 1000);

let id = 1;

export const groupIds = {
  presidents: 10,
  versionsWindows: 20,
  androidVersions: 21,
  ntdoConsoles: 30,
  ntdoHandhelds: 31,
  sonyConsoles: 32,
  sonyHandhelds: 33,
  msftConsoles: 34,
  segaConsoles: 35,
  pkmnGames: 40,
  marioGames: 41,
  zeldaGames: 42,
  moviesStarWars: 50,
  moviesMarvel: 51
};

const parseEndTime = (el, i, ary) => {
  if (el.end_time) return moment(el.end_time);
  return i + 1 in ary ? moment(ary[i + 1].start_time) : moment();
};

const createItem = (el, i, ary, groupId) =>
  new Object({
    ...el,
    id: id++,
    group: groupId,
    canMove: false,
    start_time: moment(el.start_time),
    end_time: parseEndTime(el, i, ary),
    itemProps: {
      style: {
        color: "black",
        background: randomColor({ luminosity: "light", seed: el.title })
      }
    }
  });

export let items = [
  ...versionsWindows.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.versionsWindows)
  ),
  ...usPresidents.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.usPresidents)
  ),
  ...gamesPokemon.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.gamesPokemon)
  ),
  ...consolesNtdo.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.ntdoConsoles)
  ),
  ...handheldsNtdo.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.ntdoHandhelds)
  ),
  ...consolesSony.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.sonyConsoles)
  ),
  ...handheldsSony.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.sonyHandhelds)
  ),
  ...consolesMsft.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.msftConsoles)
  ),
  ...consolesSega.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.segaConsoles)
  ),
  ...gamesMario.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.marioGames)
  ),
  ...versionsAndroid.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.androidVersions)
  ),
  ...gamesZelda.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.zeldaGames)
  ),
  ...moviesStarWars.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.moviesStarWars)
  )
];
