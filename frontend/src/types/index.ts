export interface Show {
  id: number;
  startTime: string;
  movie: Movie;
}

export interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  lenght: number;
}

export interface Seat {
  id: number;
  name: string;
  price: number;
  isSelected: boolean;
}

export interface Theater {
  id: number;
  name: string;
}

export interface Screen {
  id: number;
  show: Show[];
  seats: Seat[];
  theater: Theater;
}
