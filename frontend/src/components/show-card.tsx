import { FunctionComponent } from "react";
import { Show } from "../types";

const ShowCard: FunctionComponent<Show> = (props: Show) => {
  return (
    <div>
      <h1>{props.startTime}</h1>
    </div>
  );
};

export default ShowCard;
