import moment from "moment";
import randomColor from "randomcolor";

let randomSeed = Math.floor(Math.random() * 1000);

let id = 1;

export const groupIds = {
  presidents: 10,
  windows: 20,
  androidVersions: 21,
  ntdoConsoles: 30,
  ntdoHandhelds: 31,
  sonyConsoles: 32,
  sonyHandhelds: 33,
  msftConsoles: 34,
  segaConsoles: 35,
  pkmnGames: 40,
  marioGames: 41,
  zeldaGames: 42
};

const setEndTime = (el, i, ary) => {
  if (el.end_time) return el.end_time;
  return i + 1 in ary ? ary[i + 1].start_time : moment();
};

const setItem = (el, i, ary, groupId) =>
  new Object({
    id: id++,
    group: groupId,
    canMove: false,
    end_time: setEndTime(el, i, ary),
    itemProps: {
      style: {
        color: "black",
        background: randomColor({ luminosity: "light", seed: el.title })
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
].map((el, i, ary) => setItem(el, i, ary, groupIds.windows));

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
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.presidents))
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
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.pkmnGames))
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
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.ntdoConsoles))
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
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.ntdoHandhelds))
];

items = [
  ...items,
  ...[
    {
      title: "PlayStation",
      start_time: moment("1994")
    },
    {
      title: "PlayStation 2",
      start_time: moment("2000-07")
    },
    {
      title: "PlayStation 3",
      start_time: moment("2006")
    },
    {
      title: "PlayStation 4",
      start_time: moment("2013-11")
    },
    {
      title: "PlayStation 5",
      start_time: moment("2020-11")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.sonyConsoles))
];

items = [
  ...items,
  ...[
    {
      title: "PlayStation Portable",
      start_time: moment("2004-12")
    },
    {
      title: "PlayStation Vita",
      start_time: moment("2012"),
      end_time: moment("2019-03")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.sonyHandhelds))
];

items = [
  ...items,
  ...[
    {
      title: "Xbox",
      start_time: moment("2001-11")
    },
    {
      title: "Xbox 360",
      start_time: moment("2005-11")
    },
    {
      title: "Xbox One",
      start_time: moment("2013-11")
    },
    {
      title: "Xbox Series X/S",
      start_time: moment("2020-11")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.msftConsoles))
];

items = [
  ...items,
  ...[
    {
      title: "Sega Master System",
      start_time: moment("1986")
    },
    {
      title: "Sega Genesis",
      start_time: moment("1989-08")
    },
    {
      title: "Sega CD",
      start_time: moment("1992-10")
    },
    {
      title: "32X",
      start_time: moment("1994-11")
    },
    {
      title: "Sega Saturn",
      start_time: moment("1995-05")
    },
    {
      title: "Dreamcast",
      start_time: moment("1999-09"),
      end_time: moment("2001")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.segaConsoles))
];

items = [
  ...items,
  ...[
    {
      title: "Super Mario Bros.",
      start_time: moment("1985")
    },
    {
      title: "Super Mario Bros. 2",
      start_time: moment("1988")
    },
    {
      title: "Super Mario Bros. 3",
      start_time: moment("1988-06")
    },
    {
      title: "World",
      start_time: moment("1990-11")
    },
    {
      title: "World 2: Yoshi's Island",
      start_time: moment("1995")
    },
    {
      title: "Super Mario 64",
      start_time: moment("1996")
    },
    {
      title: "Sunshine",
      start_time: moment("2002")
    },
    {
      title: "Galaxy",
      start_time: moment("2007")
    },
    {
      title: "Galaxy 2",
      start_time: moment("2010")
    },
    {
      title: "3D World",
      start_time: moment("2013")
    },
    {
      title: "Maker",
      start_time: moment("2015")
    },
    {
      title: "Odyssey",
      start_time: moment("2017-10-27")
    },
    {
      title: "Maker 2",
      start_time: moment("2019-06-28")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.marioGames))
];

items = [
  ...items,
  ...[
    {
      title: "Xbox",
      start_time: moment("2001-11")
    },
    {
      title: "Xbox 360",
      start_time: moment("2005-11")
    },
    {
      title: "Xbox One",
      start_time: moment("2013-11")
    },
    {
      title: "Xbox Series X/S",
      start_time: moment("2020-11")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.androidVersions))
];

items = [
  ...items,
  ...[
    {
      title: "The Legend of Zelda",
      start_time: moment("1987-11")
    },
    {
      title: "Zelda II",
      start_time: moment("1988-11")
    },
    {
      title: "A Link to the Past",
      start_time: moment("1991-11")
    },
    {
      title: "Ocarina of Time",
      start_time: moment("1998-11")
    },
    {
      title: "Majora's Mask",
      start_time: moment("2000-04")
    },
    {
      title: "The Wind Waker",
      start_time: moment("2002-12")
    },
    {
      title: "Twilight Princess",
      start_time: moment("2006-11")
    },
    {
      title: "Skyward Sword",
      start_time: moment("2011-11")
    },
    {
      title: "Breath of the Wild",
      start_time: moment("2017-03")
    }
  ].map((el, i, ary) => setItem(el, i, ary, groupIds.zeldaGames))
];
