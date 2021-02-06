import moment from "moment";
import randomColor from "randomcolor";

let randomSeed = Math.floor(Math.random() * 1000);

let items = [
  {
    id: 1,
    group: 1,
    title: "Windows 10",
    start_time: moment("2015-07"),
    end_time: moment(),
    color: randomColor({ luminosity: "light", seed: randomSeed })
  },
  {
    id: 2,
    group: 1,
    title: "Windows 8",
    start_time: moment("2012-10"),
    end_time: moment("2015-07")
  },
  {
    id: 3,
    group: 1,
    title: "Windows 7",
    start_time: moment("2009-10"),
    end_time: moment("2012-10")
  },
  {
    id: 4,
    group: 1,
    title: "Windows XP",
    start_time: moment("2001-08"),
    end_time: moment("2009-10")
  }
]; // .map((elm, ind) => {id: ind; group: 1; ...elm});

items = [
  ...items,
  {
    id: 21,
    group: 2,
    title: "Donald Trump",
    start_time: moment("2016-11"),
    end_time: moment(),
    color: "red"
  },
  {
    id: 22,
    group: 2,
    title: "Barack Obama",
    start_time: moment("2008-11"),
    end_time: moment("2016-11")
  },
  {
    id: 23,
    group: 2,
    title: "George W. Bush",
    start_time: moment("2000-11"),
    end_time: moment("2008-11")
  }
];

items = [
  ...items,
  {
    id: 11,
    group: 3,
    title: "Pokemon Red and Blue (US)",
    start_time: moment("1996-02"),
    end_time: moment("2000-10")
  },
  {
    id: 12,
    group: 3,
    title: "Pokemon Gold and Silver (US)",
    start_time: moment("2000-10"),
    end_time: moment("2003-03")
  },
  {
    id: 13,
    group: 3,
    title: "Pokemon Ruby and Sapphire (US)",
    start_time: moment("2003-03"),
    end_time: moment("2007-04")
  },
  {
    id: 14,
    group: 3,
    title: "Pokemon Diamond and Pearl (US)",
    start_time: moment("2007-04"),
    end_time: moment("2012-10")
  }
]; // .map((elm, ind) => {id: ind; group: 1; ...elm});

items = [
  ...items,
  {
    id: 41,
    group: 4,
    title: "NES",
    start_time: moment("1985-10"),
    end_time: moment("1991-08")
  },
  {
    id: 42,
    group: 4,
    title: "SNES",
    start_time: moment("1991-08"),
    end_time: moment("1996-11")
  },
  {
    id: 43,
    group: 4,
    title: "N64",
    start_time: moment("1996-11"),
    end_time: moment("2001-11")
  },
  {
    id: 44,
    group: 4,
    title: "GameCube",
    start_time: moment("2001-11"),
    end_time: moment("2006-11")
  },
  {
    id: 45,
    group: 4,
    title: "Wii",
    start_time: moment("2006-11"),
    end_time: moment("2012-11")
  },
  {
    id: 46,
    group: 4,
    title: "Wii U",
    start_time: moment("2012-11"),
    end_time: moment("2017-03")
  },
  {
    id: 47,
    group: 4,
    title: "Switch",
    start_time: moment("2017-03"),
    end_time: moment()
  }
];

export default items;
