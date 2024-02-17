export interface Game {
    id: number;
    title: string;
    price: number;
    releaseDate: string;
    platform: string;
    image: string;
    discount: number | null;
    genre: string;
    description: string | null;
    releaseYear: number;
    rating: number | null;
    onSale: boolean;
    trending: boolean;
    tags: string[];
    reviews: string[];
}