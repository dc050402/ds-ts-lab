export interface MenuItems {
    id: number;
    name: string;
    course: string;
    price: number;
    discountPercent? : number;
    availableFrom: Date;
    nutrition: {
        calories : number;
        allergens : [];
    }
}