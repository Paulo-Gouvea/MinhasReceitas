export interface FoodProps {
    id: string;
    image: string;
    title: string;
    category: string;
    preparationTime: string;
    directions: string[];
    ingredients: {
        id: string,
        title: string,
        quantity: string,
        image: string    
    }[];
}