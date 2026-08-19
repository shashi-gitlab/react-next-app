import { mv_logo } from "@/app/images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {

    return (
        <Link href="/" className="inline-flex group">
            {/* <h2
                className={cn(
                    'text-2xl bg-linear-to-tl from-purple to-pink bg-clip-text text-transparent',
                    'group-hover:from-pink group-hover:to-purple', // Specific colors to change on hover
                    'tracking-wider uppercase font-bold',
                    className
                )}
            >
                <span className="hoverEffect">MV</span>Cart
            </h2> */}
            <Image src={mv_logo} alt="MV-Logo" width={185} height={55} priority  className="h-auto w-32 md:w-45" />
        </Link>
    )
}

export default Logo;