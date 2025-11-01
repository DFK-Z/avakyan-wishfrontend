import {IMenu} from "@/widgets/header";
import Link from "next/link";

interface Props {
    data: IMenu[];
    className?: string;
}

export const AuthUi: React.FC<Props> = ({ data, className }) => {
    return(
        <div className={`${className} `}>
            <ul className="flex items-center gap-x-4">
                {data.map((item, index) => (
                    <li key={index} className="">
                        <Link href={item.href} className="text-center transition-all font-medium hover:text-blue-400 text-black">{item.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}