import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Seat from "../components/seat";

interface ScreenProps {}

const Screen: FunctionComponent<ScreenProps> = () => {
  const nav = useNavigate();

  const showid = nav.getParam(id);

  const [screen, setScreen] = useState<Screen>();

  const [selectSeats, SetSelectedSeats] = useSatte<Seats>([]);

  useEffect(() => {
    fetch(`/show/${showId}`)
      .then((res) => res.json())
      .then((d) => setScreen(d));
  }, []);

  return (
    <div>
      {d.seats.sort().map((s) => (
        <Seat
          {...s}
          doOnSelect={(s) => SetSelectedSeats([...selectedSeats, ...s])}
        />
      ))}
    </div>
  );
};

export default Screen;
