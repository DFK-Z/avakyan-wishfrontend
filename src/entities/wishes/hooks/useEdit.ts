import {useEffect, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {createWishSchema} from "@/entities/wishes/schemas/wishes.schema";
import {Wish} from "@/entities/wishes";
import {useRouter} from "next/navigation";
import {getOne, update} from "@/services/wishes.service";
import {APP_ROUTE} from "@/lib/routes/app.route";
import {useForm} from "react-hook-form";
import {z} from "zod";

//Хук для редактирования желания

export const useEdit = (id: string) => {
    const router = useRouter();

    //Состояние загрузки и выполнения операций
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [wish, setWish] = useState<Wish | null>(null);

    //Валидация через Zod
    const { register, handleSubmit, formState: {errors}, watch, reset } = useForm({
        resolver: zodResolver(createWishSchema),
    });

    useEffect(() => {
        const fetchWish = async () => {
            try {
                setIsLoading(true);
                setError(null);

                //Загрузка данных желания
                const wishData = await getOne(id);
                setWish(wishData);

                //Заполнение формы данных
                reset({
                    title: wishData.title;
                    description: wishData.description || '';
                    link: wishData.link || '';
                    priority: wishData.priority;
                    isCompleted: wishData.isCompleted ? 'true' : 'false';
                });
            } catch (error) {
                console.error('Error fetching wish:', error);
                setError('Ошибка загрузки данных');
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchWish();
        }
    }, [id, reset]);


    //Обработчик отправки формы редактирования
    const onSubmit = async (data: z.infer<typeof createWishSchema>) => {
        try {
            setIsSubmitting(true);
            setError(null);

            //Отправки обновленных данных
            await update(id, data);

            //Перенаправление на страницу желаний
            router.push(APP_ROUTE.wishes.index());

            //Обновление страницы желаний
            router.refresh();
        } catch (error) {
            console.error('Error updating wish:', error);
            setError('Ошибка при сохранении изменений');
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        isLoading,
        isSubmitting,
        error,
        wish,
        watch
    }
}