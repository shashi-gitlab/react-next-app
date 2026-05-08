import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {

    return (
        // <Link href={"/"} className="inline-flex" >
        //     <h2 className={cn("text-2xl text-purple font-black tracking-wider uppercase hover:text-pink/90 hoverEffect group font-sans", className)}>
        //         <span className="text-pink group-hover:text-purple hoverEffect">MV</span>Cart
        //     </h2>
        // </Link>
        <Link href="/" className="inline-flex group">
            <h2
                className={cn(
                    'text-2xl bg-linear-to-tl from-purple to-pink bg-clip-text text-transparent',
                    'group-hover:from-pink group-hover:to-purple', // Specific colors to change on hover
                    'tracking-wider uppercase font-bold',
                    className
                )}
            >
                <span className="hoverEffect">MV</span>Cart
            </h2>
        </Link>
    )
}

export default Logo;