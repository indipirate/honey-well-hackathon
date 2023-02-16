import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import DisplayCard from "../components/display-card";
import { Movie } from "../types";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const [movies, SetMovice] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((da) => SetMovice(da));
  }, []);

  return (
    <StyledContainer>
      {movies.map((m) => (
        <DisplayCard {...m} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-items: center;
`;

export default Dashboard;
