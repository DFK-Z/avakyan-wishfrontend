export const APP_ROUTE = {
    root: (path: string | "") => path,
    home: () => APP_ROUTE.root('/'),

    //Маршруты для аутентификации
    auth: {
        login: () => APP_ROUTE.root('/login'),
        register: () => APP_ROUTE.root('/register'),
    },

    //Маршруты для работы с желаниями в dashboard
    wishes: {
        index: () => APP_ROUTE.root('/dashboard/wishes'),
        show: (id: string) => APP_ROUTE.root('/dashboard/wishes/' + id),
        create: () => APP_ROUTE.root('/dashboard/wishes/create'),
        edit: (id: string) => APP_ROUTE.root('/dashboard/wishes/edit/' + id),
    }
};