import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ShowCard from "../components/show-card";
import { Screen } from "../types";

interface ListingProps {}

const Listing: FunctionComponent<ListingProps> = () => {
  const { listBy, id } = useParams();

  const [screens, setScreens] = useState<Screen[]>([]);

  useEffect(() => {
    if (id !== undefined)
      fetch(`/screen/${listBy}/${id}`)
        .then((res) => res.json())
        .then((data) => setScreens(data));
  }, [id]);

  return (
    <>
      {screens.map((screen) => (
        <StyledContainer>
          <div>
            <h1>${screen.movie.name}</h1>
          </div>
          <div>
            <h2>
              ${screen.theater.name} - ${screen.id}
            </h2>
          </div>
          <StyledShowContainer>
            {screen.shows.map((show) => (
              <ShowCard show={show} screenId={screen.id} />
            ))}
          </StyledShowContainer>
        </StyledContainer>
      ))}
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StyledShowContainer = styled.div`
  border: 2 px solid black;
  display: flex;
  flex-direction: row;
  align-items: centers;
  justify-items: start;
`;
export default Listing;
