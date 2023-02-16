import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ScreenSeat from "../components/ScreenSeat";
import { Screen, SeatTier, Show, Ticket } from "../types";
interface SelectSeatProps {}

const SelectSeat: FunctionComponent<SelectSeatProps> = () => {
  const { screenId, showId } = useParams();
  const [screen, setScreen] = useState<Screen>();
  const [show, setShow] = useState<Show>();
  const [ticket, setTicket] = useState<Ticket>();

  useEffect(() => {
    if (screenId !== undefined && showId !== undefined) {
      fetch(`/screen/${screenId}`)
        .then((res) => res.json())
        .then((data) => setScreen(data));

      fetch(`/show/${showId}`)
        .then((res) => res.json())
        .then((data) => setShow(data));
    }
  }, [screenId, showId]);

  useEffect(() => {
    if (screen !== undefined && show !== undefined) {
      setTicket({
        id: 1,
        seats: [],
        show: show,
        screenId: screen.id,
        movieId: screen.movie,
        theater: screen.theater,
      });
    }
  }, [screen, show]);

  const genSeatArray = (capacity: number): number[] => {
    let res: number[] = [];
    for (let i = 0; i < capacity; i++) {
      res = [...res, i];
    }
    return res;
  };

  const reserveSet = (
    id: number,
    tier: SeatTier,
    isSelected: boolean
  ): void => {
    if (ticket !== undefined) {
      setTicket({ ...ticket, seats: [...ticket.seats, { id, tier }] });
    }
  };

  return (
    <StyledTheater>
      {screen?.seats.map((seat) => (
        <>
          <h1>{seat.tier.name}</h1>
          <StyledTierContainer>
            {genSeatArray(seat.capacity).map((ts) => (
              <ScreenSeat id={ts} doSelect={reserveSet} tier={seat.tier} />
            ))}
          </StyledTierContainer>
        </>
      ))}
    </StyledTheater>
  );
};

const StyledTheater = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTierContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export default SelectSeat;
