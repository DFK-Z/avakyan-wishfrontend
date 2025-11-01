import {IMenu} from "@/widgets/header";
import {APP_ROUTE} from "@/lib/routes/app.route";

export const MENU_DATA: IMenu[] = [
    {label: "Главная", href: APP_ROUTE.home()},
    {label: "Желания", href: APP_ROUTE.wishes.index()},
];

export const AUTH_DATA: IMenu[] = [
    {label: "Войти", href: APP_ROUTE.auth.login()},
    {label: "Регистрация", href: APP_ROUTE.auth.register()},

];