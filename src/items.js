import moment from "moment";
import randomColor from "randomcolor";
import gamesZelda from "./data/games-zelda.json";
import versionsWindows from "./data/versions-windows.json";
import usPresidents from "./data/us-presidents.json";
import gamesPokemon from "./data/games-pokemon.json";
import gamesMario from "./data/games-mario.json";
import gamesGta from "./data/games-gta.json";
import consolesNtdo from "./data/consoles-nintendo.json";
import consolesMsft from "./data/consoles-microsoft.json";
import consolesSega from "./data/consoles-sega.json";
import consolesSony from "./data/consoles-sony.json";
import handheldsNtdo from "./data/handhelds-nintendo.json";
import handheldsSony from "./data/handhelds-sony.json";
import versionsAndroid from "./data/versions-android.json";
import versionsRpgMaker from "./data/versions-rpg-maker.json";
import moviesStarWars from "./data/movies-star-wars.json";
import moviesOscars from "./data/movies-oscars.json";
import moviesMarvel from "./data/movies-marvel.json";

let randomSeed = Math.floor(Math.random() * 1000);

let id = 1;

export const groupIds = {
  usPresidents: 10,
  versionsWindows: 20,
  androidVersions: 21,
  versionsRpgMaker: 22,
  ntdoConsoles: 30,
  ntdoHandhelds: 31,
  sonyConsoles: 32,
  sonyHandhelds: 33,
  msftConsoles: 34,
  segaConsoles: 35,
  gamesPokemon: 40,
  gamesMario: 41,
  zeldaGames: 42,
  moviesOscars: 50,
  moviesStarWars: 51,
  moviesMarvel: 52
};

// fetch("./data/games-zelda.json")
//   .then((response) => response.text())
//   .then((json) => console.log(json));

export const groups = [
  { id: groupIds.usPresidents, title: "U.S. President" },
  { id: groupIds.versionsWindows, title: "Windows" },
  { id: groupIds.androidVersions, title: "Android" },
  { id: groupIds.versionsRpgMaker, title: "RPG Maker" },
  { id: groupIds.gamesPokemon, title: "Pokemon game" },
  { id: groupIds.ntdoConsoles, title: "Nintendo console" },
  { id: groupIds.ntdoHandhelds, title: "Nintendo handheld" },
  { id: groupIds.sonyConsoles, title: "Sony console" },
  { id: groupIds.sonyHandhelds, title: "Sony handheld" },
  { id: groupIds.msftConsoles, title: "Microsoft console" },
  { id: groupIds.segaConsoles, title: "Sega console" },
  { id: groupIds.gamesMario, title: "Mario game" },
  { id: groupIds.zeldaGames, title: "Zelda game" },
  { id: groupIds.gamesGta, title: "GTA game" },
  { id: groupIds.moviesOscars, title: "Best Picture" },
  { id: groupIds.moviesStarWars, title: "Star Wars movies" },
  { id: groupIds.moviesMarvel, title: "Marvel movies (MCU)" }
];

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

// export let items2 = files;

export let items = [
  ...versionsWindows.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.versionsWindows)
  ),
  ...versionsRpgMaker.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.versionsRpgMaker)
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
    createItem(el, i, ary, groupIds.gamesMario)
  ),
  ...gamesGta.map((el, i, ary) => createItem(el, i, ary, groupIds.gamesGta)),
  ...versionsAndroid.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.androidVersions)
  ),
  ...gamesZelda.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.zeldaGames)
  ),
  ...moviesStarWars.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.moviesStarWars)
  ),
  ...moviesOscars.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.moviesOscars)
  ),
  ...moviesMarvel.map((el, i, ary) =>
    createItem(el, i, ary, groupIds.moviesMarvel)
  )
];
