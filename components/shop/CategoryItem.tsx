import React from "react";

export const CategoryItem = ({ cat, activeSet, toggleCategory }: { cat: any; activeSet: Set<string>; toggleCategory: (slug: string) => void }) => {
    const [open, setOpen] = React.useState(false);
    const isActive = activeSet.has(cat.slug);

    return (
        <li className="border-b py-2">
            <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isActive}
                        onChange={() => toggleCategory(cat.slug)}
                        className="accent-black"
                    />
                    <span>{cat.name}</span>
                </label>

                {cat.children?.length > 0 && (
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-xs text-gray-500"
                    >
                        {open ? "▲" : "▼"}
                    </button>
                )}
            </div>

            {open && cat.children?.length > 0 && (
                <ul className="ml-6 mt-2 space-y-1">
                    {cat.children.map((child:any) => (
                        <CategoryItem
                            key={child.slug}
                            cat={child}
                            activeSet={activeSet}
                            toggleCategory={toggleCategory}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}