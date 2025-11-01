import api from "@/api/config.api";
import {API_ROUTE} from "@/lib/routes/api.route";
import {getAuthHeaders} from "@/api/headers.api";
import {z} from "zod";
import {createWishSchema} from "@/entities/wishes/schemas/wishes.schema";
import {Wish} from "@/entities/wishes";

//Получение списка всех желаний
export const getAll =  async (): Promise<Wish[]> => {
    const response = await api.get(API_ROUTE.wishes.index(), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};

//Получение одного желания
export const getOne = async (id: string): Promise<Wish> => {
    const response = await api.get(API_ROUTE.wishes.show(id), {
        headers: await getAuthHeaders(),
    });
    return response.data;
};

//Создание нового желания
export const create = async(data: z.infer<typeof createWishSchema> ): Promise<Wish> => {
    return api.post(API_ROUTE.wishes.create(), data, {
        headers: await getAuthHeaders(),
    });
}

//Обновление существующего желания
export const update = async (id: string, data: z.infer<typeof createWishSchema>): Promise<Wish> => {
    try {
        const response = await api.patch(API_ROUTE.wishes.update(id), data, {
            headers: await getAuthHeaders(),
        });
        return response.data;
    } catch (error) {
        console.error('Error updating wish:', error);
        throw error;
    }
};

//Удаление желания
export const remove = async (id: string): Promise<void> => {
    try {
        await api.delete(API_ROUTE.wishes.delete(id), {
            headers: await getAuthHeaders(),
        });
    } catch (error) {
        console.error('Error deleting wish:', error);
        throw error;
    }
};