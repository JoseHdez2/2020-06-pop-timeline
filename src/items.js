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
    canMove: false,
    end_time: i + 1 in ary ? ary[i + 1].start_time : moment(),
    itemProps: {
      style: {
        background: randomColor({ luminosity: "dark", seed: el.title })
      }
    },
    ...el
  });

export let items = [
  {
    title: "Windows NT 3.1",
    start_time: moment("1993-07")
  },
  {
    title: "Windows NT 4.0",
    start_time: moment("1996-06")
  },
  {
    title: "Windows 2000",
    start_time: moment("2000-02")
  },
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
    },
    {
      title: "Joe Biden",
      start_time: moment("2020-11"),
      color: "red"
    }
  ].map((el, i, ary) => setGroup(el, i, ary, groupIds.presidents))
];

items = [
  ...items,
  ...[
    {
      title: "Pokemon Red and Blue",
      start_time: moment("1996")
    },
    {
      title: "Pokemon Gold and Silver",
      start_time: moment("1999")
    },
    {
      title: "Pokemon Ruby and Sapphire",
      start_time: moment("2002")
    },
    {
      title: "Pokemon Diamond and Pearl",
      start_time: moment("2006")
    },
    {
      title: "Pokemon Black and White",
      start_time: moment("2010")
    },
    {
      title: "Pokemon X and Y",
      start_time: moment("2013")
    },
    {
      title: "Pokemon Sun and Moon",
      start_time: moment("2016")
    },
    {
      title: "Pokemon Sword and Shield",
      start_time: moment("2019")
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
      title: "Nintendo Switch",
      start_time: moment("2017-03")
    }
  ].map((el, i, ary) => setGroup(el, i, ary, groupIds.ntdoConsoles))
];

items = [
  ...items,
  ...[
    {
      title: "Game Boy",
      start_time: moment("1989")
    },
    {
      title: "Game Boy Color",
      start_time: moment("1998")
    },
    {
      title: "Game Boy Advance",
      start_time: moment("2001")
    },
    {
      title: "Game Boy Advance SP",
      start_time: moment("2003")
    },
    {
      title: "Nintendo DS",
      start_time: moment("2004")
    },
    {
      title: "Nintendo DSi",
      start_time: moment("2009")
    },
    {
      title: "Nintendo 3DS",
      start_time: moment("2011")
    },
    {
      title: "Nintendo Switch",
      start_time: moment("2017-03")
    }
  ].map((el, i, ary) => setGroup(el, i, ary, groupIds.ntdoHandhelds))
];
