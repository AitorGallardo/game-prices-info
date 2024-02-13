export interface Game {
    id: number;
    title: string;
    price: number;
    releaseDate: string;
    platform: string;
    image: string;
    discount: number;
    category: string;
    description: string;
    rating: number;
    onSale: boolean;
    trending: boolean;
    tags: string[];
    reviews: string[];
}