import { cn } from "@/lib/utils";

const Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h2 className={cn("text-2xl font-semibold text-shop-dark-green capitalize tracking-wide", className)}>
            {children}
        </h2>
    );
}

const SubTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h3 className={cn("font-semibold text-gray-900 font-sans", className)}>
            {children}
        </h3>
    );
}

const SubText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={cn("text-sm text-gray-500", className)}>
            {children}
        </p>
    );
}
 

export { Title, SubText, SubTitle };