export interface TDestinationType {
    id?: string;
    country?: string;
    title?: string;
    description?: string;
    banner?: string;
    steps?: {
      banner: string;
      image: string;
      day: string;
      title: string;
      description: string;
    }[];
    locationLink?: string;
    embedLocation?: string;
    updatedAt?: string;
    createdAt?: string;
  }
  
  // Make all fields optional using Partial
  export type OptionalTDestinationType = Partial<TDestinationType>;