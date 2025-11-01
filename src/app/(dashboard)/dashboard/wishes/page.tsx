import {getAll} from "@/services/wishes.service";
import Link from "next/link";
import {APP_ROUTE} from "@/lib/routes/app.route";
import {Container} from "@/components/ui/container";
import {Table} from "@/entities/wishes";

{/* Страница всех желаний */}

export default async function WishesPage () {
    {/* Вызов всех желаний */}
    const wishes = await getAll();
    return (
        <div>
            <Container className="space-y-4">
                <div className="flex justify-end">
                    <Link className="py-3 px-4 text-white font-medium bg-blue-400 rounded-lg" href={APP_ROUTE.wishes.create()}>Создать</Link>
                </div>
                <Table data={wishes} />
            </Container>
        </div>
    );
}