import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "../types";

const DisplayCard: FunctionComponent<Movie> = (props: Movie) => {
  const nav = useNavigate();
  return (
    <StyledCard>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        <button onClick={(e) => nav(`/listing/movie/${props.id}`)}>
          Book Now
        </button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  justify-items: center;
  align-items: center;
  padding: 5px;
  border: 2px solid black;
`;

export default DisplayCard;
