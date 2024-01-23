interface Coordinates {
  latitude: string;
  longitude: string;
}

interface Street {
  name: string;
  number: number;
}

interface Timezone {
  description: string;
  offset: string;
}

interface Location {
  city: string;
  coordinates: Coordinates;
  country: string;
  postcode: number;
  state: string;
  street: Street;
  timezone: Timezone;
}

interface Id {
  name: string;
  value: string;
}

interface Dob {
  age: number;
  date: string;
}

interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

interface Name {
  first: string;
  last: string;
  title: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Registered {
  age: number;
  date: string;
}

export interface User {
  cell: string;
  dob: Dob;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  phone: string;
  picture: Picture;
  registered: Registered;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface UserResponseType {
  results: User[];
  info: Info;
}
