import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { SeatTier } from "../types";

interface SeatProps {
  id: number;
  tier: SeatTier;
  doSelect: (id: number, tier: SeatTier, isSelected: boolean) => void;
}

const ScreenSeat: FunctionComponent<SeatProps> = ({
  id,
  tier,
  doSelect,
}: SeatProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    doSelect(id, tier, isSelected);
  }, [isSelected]);
  return (
    <StyledSeat>
      {id}
      <button onClick={(e) => setIsSelected(!isSelected)}>select</button>
    </StyledSeat>
  );
};

const StyledSeat = styled.div`
  width: 10px;
  height: 10px;
  background-color: grey;
  text-align: center;
`;
export default ScreenSeat;
