"use client";

import {
    useState,
    useRef,
    useEffect,
    cloneElement,
    ReactNode,
} from "react";
import { createPortal } from "react-dom";

type Side = "top" | "bottom" | "left" | "right";

interface PopoverProps {
    content: ReactNode;
    children: any;
    side?: Side;
    offset?: number;
}

export default function CustomTooltip({
    content,
    children,
    side = "bottom",
    offset = 8,
}: PopoverProps) {
    const [open, setOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [currentSide, setCurrentSide] = useState<Side>(side);
    const [mounted, setMounted] = useState(false);

    const triggerRef = useRef<any>(null);
    const popoverRef = useRef<any>(null);

    useEffect(() => setMounted(true), []);

    const calculatePosition = () => {
        const trigger = triggerRef.current;
        const pop = popoverRef.current;
        if (!trigger || !pop) return;

        const rect = trigger.getBoundingClientRect();
        const pRect = pop.getBoundingClientRect();

        const positions = {
            top: {
                top: rect.top - pRect.height - offset,
                left: rect.left + rect.width / 2 - pRect.width / 2,
            },
            bottom: {
                top: rect.bottom + offset,
                left: rect.left + rect.width / 2 - pRect.width / 2,
            },
            left: {
                top: rect.top + rect.height / 2 - pRect.height / 2,
                left: rect.left - pRect.width - offset,
            },
            right: {
                top: rect.top + rect.height / 2 - pRect.height / 2,
                left: rect.right + offset,
            },
        };

        const fits = (s: Side) => {
            const p = positions[s];
            return (
                p.top >= 0 &&
                p.left >= 0 &&
                p.top + pRect.height <= window.innerHeight &&
                p.left + pRect.width <= window.innerWidth
            );
        };

        let finalSide = side;

        if (!fits(side)) {
            for (const s of ["bottom", "top", "right", "left"] as Side[]) {
                if (fits(s)) {
                    finalSide = s;
                    break;
                }
            }
        }

        setCurrentSide(finalSide);

        let { top, left } = positions[finalSide];

        // Clamp inside viewport
        top = Math.max(8, Math.min(top, window.innerHeight - pRect.height - 8));
        left = Math.max(8, Math.min(left, window.innerWidth - pRect.width - 8));

        setCoords({ top, left });
    };

    useEffect(() => {
        if (open) requestAnimationFrame(calculatePosition);
    }, [open]);

    useEffect(() => {
        const handler = () => open && calculatePosition();
        window.addEventListener("scroll", handler);
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("scroll", handler);
            window.removeEventListener("resize", handler);
        };
    }, [open]);

    // Close on outside click
    useEffect(() => {
        const handleOutside = (e: any) => {
            if (
                triggerRef.current &&
                !triggerRef.current.contains(e.target) &&
                popoverRef.current &&
                !popoverRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutside);
        return () => document.removeEventListener("mousedown", handleOutside);
    }, []);

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, []);

    const isTouchDevice = typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);


    const show = () => {
        setOpen(true);
    };

    const hide = () => {
        setOpen(false);
    };

    const child = cloneElement(children, {
        ref: triggerRef,

        // Desktop (hover)
        onMouseEnter: !isTouchDevice ? show : undefined,
        onMouseLeave: !isTouchDevice ? hide : undefined,

        // Mobile (tap)
        onClick: isTouchDevice
            ? () => setOpen((prev: boolean) => !prev)
            : undefined,

        // Accessibility (keyboard still works)
        onFocus: show,
        onBlur: hide,

        "aria-expanded": open,
    });

    return (
        <>
            {child}

            {mounted &&
                open &&
                createPortal(
                    <div
                        ref={popoverRef}
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        role="dialog"
                        data-side={currentSide}
                        className="
              fixed z-50 w-64 rounded-xl border bg-white p-4 shadow-lg
              dark:bg-gray-900 dark:text-white
              transition-all duration-150 ease-out
            "
                        style={{
                            top: coords.top,
                            left: coords.left,
                        }}
                    >
                        {content}

                        {/* Arrow */}
                        <div
                            className={`
                absolute w-3 h-3 rotate-45 bg-inherit border
                ${currentSide === "top" && "-bottom-1.5 left-1/2 -translate-x-1/2"}
                ${currentSide === "bottom" && "-top-1.5 left-1/2 -translate-x-1/2"}
                ${currentSide === "left" && "-right-1.5 top-1/2 -translate-y-1/2"}
                ${currentSide === "right" && "-left-1.5 top-1/2 -translate-y-1/2"}
              `}
                        />
                    </div>,
                    document.body
                )}
        </>
    );
}



// how to us econtent
{/* <CustomTooltip. content="Thank you for subscribing!" side='left'>
                <Button className={'w-full bg-gray-900 text-white'} size={'lg'}>Subscribe</Button>
              </CustomTooltip.> */}

//   or
{/* <CustomTooltip.
  content={
    <div>
      <p className="font-medium">Delete item?</p>
      <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded">
        Confirm
      </button>
    </div>
  }
>
  <button className="px-4 py-2 bg-blue-600 text-white rounded">
    Open Popover
  </button>
</CustomTooltip.> */}