import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {

    return (
        <Link href={"/"} className="inline-flex" >
            <h2 className={cn("text-2xl text-shop-dark-green font-black tracking-wider uppercase hover:text-shop-light-green/90 hoverEffect group font-sans", className)}>
                <span className="text-shop-light-green group-hover:text-shop-dark-green hoverEffect">MV</span>Cart
            </h2>
        </Link>
    )
}

export default Logo;