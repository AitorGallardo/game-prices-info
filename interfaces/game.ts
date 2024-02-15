export interface Game {
    id: number;
    title: string;
    price: number;
    releaseDate: string;
    platform: string;
    image: string;
    discount: number;
    genre: string;
    description: string;
    releaseYear: number;
    rating: number;
    onSale: boolean;
    trending: boolean;
    tags: string[];
    reviews: string[];
}