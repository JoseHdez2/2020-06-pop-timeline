import moment from "moment";
import randomColor from "randomcolor";

let randomSeed = Math.floor(Math.random() * 1000);

let id = 1;

export const groupIds = {
  windows: 1,
  presidents: 2,
  ntdoConsoles: 3,
  ntdoHandhelds: 4,
  sonyConsoles: 5,
  sonyHandhelds: 6,
  msftConsoles: 7,
  pkmnGames: 8,
  marioGames: 9
};

const setGroup = (el, i, ary, groupId) =>
  new Object({
    id: id++,
    group: groupId,
    end_time: i + 1 in ary ? ary[i + 1].start_time : moment(),
    ...el
  });

export let items = [
  {
    title: "Windows XP",
    start_time: moment("2001-08")
  },
  {
    title: "Windows 7",
    start_time: moment("2009-10")
  },
  {
    title: "Windows 8",
    start_time: moment("2012-10")
  },
  {
    title: "Windows 10",
    start_time: moment("2015-07"),
    color: randomColor({ luminosity: "light", seed: randomSeed })
  }
].map((el, i, ary) => setGroup(el, i, ary, groupIds.windows));

items = [
  ...items,
  ...[
    {
      title: "George W. Bush",
      start_time: moment("2000-11")
    },
    {
      title: "Barack Obama",
      start_time: moment("2008-11")
    },
    {
      title: "Donald Trump",
      start_time: moment("2016-11"),
      color: "red"
    }
  ].map((el, i, ary) => setGroup(el, i, ary, groupIds.presidents))
];

items = [
  ...items,
  ...[
    {
      title: "Pokemon Red and Blue (US)",
      start_time: moment("1996-02")
    },
    {
      title: "Pokemon Gold and Silver (US)",
      start_time: moment("2000-10")
    },
    {
      title: "Pokemon Ruby and Sapphire (US)",
      start_time: moment("2003-03")
    },
    {
      title: "Pokemon Diamond and Pearl (US)",
      start_time: moment("2007-04")
    }
  ].map((el, i, ary) => setGroup(el, i, ary, groupIds.pkmnGames))
];

items = [
  ...items,
  ...[
    {
      title: "NES",
      start_time: moment("1985-10")
    },
    {
      title: "SNES",
      start_time: moment("1991-08")
    },
    {
      title: "N64",
      start_time: moment("1996-11")
    },
    {
      title: "GameCube",
      start_time: moment("2001-11")
    },
    {
      title: "Wii",
      start_time: moment("2006-11")
    },
    {
      title: "Wii U",
      start_time: moment("2012-11")
    },
    {
      title: "Switch",
      start_time: moment("2017-03")
    }
  ].map((el, i, ary) => setGroup(el, i, ary, groupIds.ntdoConsoles))
];
