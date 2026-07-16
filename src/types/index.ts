export interface Service {
  id: string;
  title: string;
  description: string;
  price?: string;
  icon: string;
}

export interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface System {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}
