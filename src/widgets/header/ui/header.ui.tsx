import React from "react";
import {Auth, IMenu, Logo, Navigation} from "@/widgets/header";
import {Container} from "@/components/ui/container";
import {AUTH_DATA} from "@/widgets/header/module/menu.data";

interface Props {
    id: string;
    data: IMenu[],
    className?: string;
}

export const HeaderUi: React.FC<Props> = ({ id, className, data }) => {
    return (
        <header className={`${className} `} id={String(id)}>
            <Container className="w-full flex items-center justify-between">
                <Logo />
                <Navigation data={data} />
                <Auth data={AUTH_DATA} />
            </Container>
        </header>
    );
}