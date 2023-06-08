export type Title = string;

export interface IBooks {
  ID: number;
  title: Title;
  stock: number;
}

export interface IBooksa {
  title: string;
  stock: number;
}

export interface IBooks2 {
  ID2: number;
  title2: string;
  stock2: IBooksa;
}

export interface IProjects {
  ProjectName: string;
  ProjectCurrency: string;
}

export interface IUserDetails {
  email: string;
  familyName: string;
  givenName: string;
  logonName: string;
  initials: string;
}

export enum Entity {
  Books = "company1.forecasting.Books",
  Booksa = "company1.forecasting.Booksa",
  Books2 = "company1.forecasting.Books2",
  Projects = "company1.forecasting.Projects",
  UserDetails = "company1.forecasting.UserDetails",
}

export enum SanitizedEntity {
  Books = "Books",
  Booksa = "Booksa",
  Books2 = "Books2",
  Projects = "Projects",
  UserDetails = "UserDetails",
}
