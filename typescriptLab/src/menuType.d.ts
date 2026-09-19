type Course = "starter" | "main" | "desert";

export interface MenuItem {
    id: number;
    name: string;
    course: Course;
    price: number;
    discountPercent? : number;
    availableFrom?: Date;
    nutrition: {
        calories : number;
        allergens : string[];
    }
}

export interface ComboDeal {
    id: number;
    name: string;
    items: MenuItem[];
    price: number;
}