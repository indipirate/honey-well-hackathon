export interface Show {
  id: number;
  startTime: string;
}

export interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  lenght: number;
}

export interface SeatTier {
  id: number;
  name: string;
  price: number;  
}

export interface Seat {
  id: number;
  capacity: number;
  tier: SeatTier;
  rows: number;
}

export interface Theater {
  id: number;
  name: string;
}

export interface Screen {
  id: number;
  seats: Seat[];
  movie: Movie;
  theater: Theater;
  shows: Show[];
}

export interface BookedSeat {
  id: number;
  tier: SeatTier;
}
export interface Ticket {
  id: number;
  movieId: Movie;
  screenId: number;
  theater: Theater;
  seats: BookedSeat[];
  show: Show;
}
