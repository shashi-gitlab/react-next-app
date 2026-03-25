import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback:()=>void, ignoreRefs: React.RefObject<HTMLElement | null>[] = []){
    const ref = useRef<T>(null);
    useEffect(()=>{
        const handleClickOutSide=(e:MouseEvent)=>{
            const target = e.target as Node;

            // ignore sidebar itself
            if (ref.current?.contains(target)) return;

            // ignore elements like toggle button
            if (ignoreRefs.some(r => r.current?.contains(target))) return;

            callback();
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return()=>{
            document.removeEventListener("mousedown",handleClickOutSide);
        }
    },[callback, ignoreRefs]);

    return ref;
}