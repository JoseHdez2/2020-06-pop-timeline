import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import { groupIds, items } from "./items";

const groups = [
  { id: groupIds.windows, title: "Windows" },
  { id: groupIds.presidents, title: "U.S. President" },
  { id: groupIds.pkmnGames, title: "Pokemon game" },
  { id: groupIds.ntdoConsoles, title: "Nintendo console" },
  { id: groupIds.ntdoHandhelds, title: "Nintendo handheld" },
  { id: groupIds.sonyConsoles, title: "Sony console" },
  { id: groupIds.sonyHandhelds, title: "Sony handheld" },
  { id: groupIds.msftConsoles, title: "Microsoft console" },
  { id: groupIds.marioGames, title: "Mario game" }
];

export default function App() {
  return (
    <div>
      Rendered by react!
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-10, "year")}
        defaultTimeEnd={moment()}
      />
    </div>
  );
}
