import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../types";

const DisplayCard: FunctionComponent<Movie> = (props: Movie) => {
  const nav = useNavigate();
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={(e) => nav.to("book")}>Book Now</button>
    </div>
  );
};

export default DisplayCard;
