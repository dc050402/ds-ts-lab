type Course = "starter" | "main" | "dessert";

export interface MenuItems {
    id: number;
    name: string;
    course: Course;
    price: number;
    discountPercent? : number;
    availableFrom: Date;
    nutrition: {
        calories : number;
        allergens : [];
    }
}