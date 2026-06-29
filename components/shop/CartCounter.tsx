import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "@/app/types/product";

interface Props {
    item: Product;
    quantity: number;
    addToCart: (product: any) => void;
    decreaseQuantity: (id: number) => void;
}
export const CartCounter = ({ item, quantity, addToCart, decreaseQuantity }:Props) => {
    return (
        <div className="flex items-center border rounded p-0.2 bg-slate-50 max-w-max">
            <Button size="xs" variant="ghost" onClick={() => decreaseQuantity(item.id)}>
                <MinusIcon size={14} className="text-purple"/>
            </Button>
            <span className="px-3 font-semibold text-sm text-primary-color bg-gray-100">{quantity}</span>
            <Button size="xs" variant="ghost" onClick={() => addToCart(item)}>
                <PlusIcon size={14} className="text-purple"/>
            </Button>
        </div>
    );
};
