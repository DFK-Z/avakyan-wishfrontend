import {CreateForm} from "@/entities/wishes";
import {Container} from "@/components/ui/container";
//Страница создания желания
export default function CreateProduct (){
    return (
        <div className=" w-full h-screen flex items-center justify-center" >
            <Container className="w-full max-w-3xl text-white">
                {/* Форма создания желания */}
                <CreateForm label="Создание желаний"/>
            </Container>
        </div>
    );
}