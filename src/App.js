import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import items from "./items";

const groups = [
  { id: 1, title: "Windows" },
  { id: 2, title: "U.S. President" },
  { id: 3, title: "Pokemon" },
  { id: 4, title: "Nintendo console" },
  { id: 5, title: "Nintendo handheld" },
  { id: 6, title: "Sony console" },
  { id: 7, title: "Sony console" }
];

export default function App() {
  return (
    <div>
      Rendered by react!
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
}
