import { Amenities } from "../enums/amenities.enum";

export class HotelesInfo {
    id: string;
    name: string;
    stars: number;
    price: number;
    image: string;
    amenities: Array<Amenities>
}