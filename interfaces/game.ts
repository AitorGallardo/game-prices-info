export interface Game {
    id: number;
    title: string;
    price: number;
    releaseate: string;
    platform: number[];
    image: string;
    discount: number | null;
    genre: number[];
    description: string | null;
    release_year: number;
    rating: number | null;
    on_sale: boolean;
    trending: boolean;
    tags: string[];
    reviews: string[];
}

