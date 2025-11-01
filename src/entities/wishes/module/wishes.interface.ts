export interface Wish {
    priority: string;
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    link: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}