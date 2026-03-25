import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {

    return (
        <Link href={"/"} >
            <h2 className={cn("text-shop-dark-green text-2xl tracking-wider uppercase hover:text-shop-light-green/90 hoverEffect group", className)}>
                Shopcar<span className="text-shop-light-green hover:text-shop-dark-green hoverEffect">t</span>
            </h2>
        </Link>
    )
}

export default Logo;