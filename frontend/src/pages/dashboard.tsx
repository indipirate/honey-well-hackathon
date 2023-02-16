import { FunctionComponent, useEffect, useState } from "react";
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
    <div>
      {movies.map((m) => (
        <DisplayCard {...m} />
      ))}
    </div>
  );
};

export default Dashboard;
