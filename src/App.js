import React from "react";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import { groupIds, groups, items } from "./items";

export default function App() {
  return (
    <div>
      <h2>Pop-culture Timeline</h2>
      <span>
        Sample timeline using{" "}
        <a href={"https://www.npmjs.com/package/react-calendar-timeline"}>
          react-calendar-timeline
        </a>
        .
      </span>
      <Timeline
        groups={groups}
        items={items}
        minZoom={365.24 * 86400 * 1000} // 1 year
        maxZoom={365.24 * 86400 * 1000 * 20} // 20 years
        defaultTimeStart={moment().add(-20, "year")}
        defaultTimeEnd={moment()}
      />
    </div>
  );
}
