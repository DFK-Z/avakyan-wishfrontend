import {BACKEND_URL} from "@/lib/constants";

//Обращение к бэкенду
export const API_ROUTE = {
    root: (url: string | "") => BACKEND_URL + url,
    //Маршруты для аутентификации
    auth: {
        register: ()  => API_ROUTE.root('/auth/register'),
        login: () => API_ROUTE.root('/auth/login'),
    },
    //Маршруты для работы с желаниями
    wishes: {
        index: () => API_ROUTE.root('/wishes'),
        show: (id: string | number) => API_ROUTE.root('/wishes/' + id),
        create: () => API_ROUTE.root('/wishes'),
        update: (id: string ) => API_ROUTE.root(`/wishes/${id}`),
        delete: (id: string | number) => API_ROUTE.root('/wishes/' + id),
    },
};