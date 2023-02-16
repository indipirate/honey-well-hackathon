import { FunctionComponent } from "react";
import { Seat } from "../types";
import { styled } from "styled-components";

const Seat: FunctionComponent<Seat> = (props: Seat) => {
  return <StyledSeat>{props.id}
  <button onClick={(e) => setSelected(s)}>select</button>
  </StyledSeat>;
};

const StyledSeat = styled.div`
  width: 10px;
  height: 10px;
  background-color: grey;
  text-align: center;
`;
export default Seat;
