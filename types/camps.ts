export interface Session {
  startDate: string;
  endDate: string;
  campNumber: string;
  campType: string;
  price: string;
  times: string;
  ages: string;
  soldOut: boolean;
  itineraryUrl: string;
  registerUrl: string;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  fullAddress: string;
  sessions: Session[];
}

export interface StateData {
  name: string;
  locations: Location[];
}

export interface CampData {
  camps: {
    [key: string]: StateData;
  };
} 