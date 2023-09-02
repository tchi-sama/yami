export interface Store {
  storeName: string;
  id: number;
  rating: {
      rating: number;
      numberOfRaters: number;
  };
  description: string;
  hourOfWorkInWeek: Record<string, string>; // An object with days of the week as keys and string values for hours
  jobTime: string[];
  backgroundImage: string;
  avatarImage: string;
  location: {
      lat: number;
      lng: number;
  };
}

