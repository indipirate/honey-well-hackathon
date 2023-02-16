import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Show } from "../types";

interface ShowCardProps {
  show: Show;
  screenId: number;
}

const ShowCard: FunctionComponent<ShowCardProps> = ({
  show,
  screenId,
}: ShowCardProps) => {
  const nav = useNavigate();

  return (
    <div>
      <ShowButton onClick={(e) => nav(`/select/${screenId}/${show.id}`)}>
        {show.startTime}
      </ShowButton>
    </div>
  );
};

const ShowButton = styled.button`
  padding: 1 px solid blue;
  color: blue;
  text-align: center;
  padding: 7px;
  border-radius: 7px;
`;
export default ShowCard;
