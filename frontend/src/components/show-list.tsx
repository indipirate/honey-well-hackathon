import { FunctionComponent } from "react";

import { Screen } from "../types";
import ShowCard from "./show-card";

const ShowList: FunctionComponent<Screen> = (props: Screen) => {
  return (
    <div>
      {props.show.map((s) => (
        <ShowCard {...s} />
      ))}
    </div>
  );
};

export default ShowList;
