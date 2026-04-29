import React, { useEffect, useRef, useState } from "react";

/**
 * Example category structure:
 * {
 *   slug: "electronics",
 *   name: "Electronics",
 *   children: [...]
 * }
 */

type Category = {
    slug: string;
    name: string;
    children?: Category[];
};

const categories: Category[] = [
    {
        slug: "electronics",
        name: "Electronics",
        children: [
            {
                slug: "mobiles",
                name: "Mobiles",
                children: [
                    { slug: "android", name: "Android" },
                    { slug: "ios", name: "iOS" },
                ],
            },
            { slug: "laptops", name: "Laptops" },
        ],
    },
    {
        slug: "fashion",
        name: "Fashion",
        children: [
            { slug: "mens", name: "Men's Fashion" },
            { slug: "womens", name: "Women's Fashion" },
        ],
    },
];

// Flatten all descendants
const getDescendants = (node: Category): string[] => {
    let result: string[] = [];

    const walk = (n: Category) => {
        result.push(n.slug);
        n.children?.forEach(walk);
    };

    node.children?.forEach(walk);
    return result;
};

type CategoryNodeProps = {
    node: Category;
    selected: Set<string>;
    setSelected: React.Dispatch<React.SetStateAction<Set<string>>>;
};

function CategoryNode({ node, selected, setSelected }: CategoryNodeProps) {
    const ref = useRef<HTMLInputElement | null>(null);

    const descendants = node.children ? getDescendants(node) : [];

    const isChecked = node.children
        ? descendants.every((id) => selected.has(id))
        : selected.has(node.slug);

    const isIndeterminate: boolean =
    Boolean(node.children) &&
    descendants.some((id) => selected.has(id)) &&
    !isChecked;

    // set indeterminate state (IMPORTANT)
    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = isIndeterminate;
        }
    }, [isIndeterminate]);

    const toggle = () => {
        setSelected((prev) => {
            const next = new Set(prev);

            if (node.children) {
                // parent toggle
                if (isChecked || isIndeterminate) {
                    descendants.forEach((id) => next.delete(id));
                } else {
                    descendants.forEach((id) => next.add(id));
                }
            } else {
                next.has(node.slug)
                    ? next.delete(node.slug)
                    : next.add(node.slug);
            }

            return next;
        });
    };

    return (
        <li className="ml-2">
            <label className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50 px-2 rounded">
                <input
                    ref={ref}
                    type="checkbox"
                    checked={isChecked}
                    onChange={toggle}
                    className="accent-black w-4 h-4"
                />
                <span className="text-sm">{node.name}</span>
            </label>

            {node.children?.length !== undefined && node.children?.length > 0 && (
                <ul className="ml-6 border-l pl-3">
                    {node.children.map((child) => (
                        <CategoryNode
                            key={child.slug}
                            node={child}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function EcommerceFilter() {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    return (
        <div className="space-y-2 md:max-h-screen md:overflow-y-auto">

            <ul className="space-y-1">
                {categories.map((cat) => (
                    <CategoryNode
                        key={cat.slug}
                        node={cat}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))}
            </ul>

            {/* Debug selected */}
            <div className="mt-3 text-xs text-gray-500">
                Selected: {[...selected].join(", ")}
            </div>
        </div>
    );
}