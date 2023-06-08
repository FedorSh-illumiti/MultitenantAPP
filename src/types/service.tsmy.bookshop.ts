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

export enum Entity {
    Books = "my.bookshop.Books",
    Booksa = "my.bookshop.Booksa",
    Books2 = "my.bookshop.Books2"
}

export enum SanitizedEntity {
    Books = "Books",
    Booksa = "Booksa",
    Books2 = "Books2"
}
