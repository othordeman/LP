import { useRef, useState, useEffect } from "react";

export const useOutsideClickAleart = (initialValue) => {

    const ref = useRef(null);
    const [showMenu, setShowMenu] = useState(initialValue);

    // checking if we click inside the ref-element.  (ref is a referens to an element in the DOM)
    const handleClickOutside = (event) => { 
        if (ref.current && !ref.current.contains(event.target)) { 
            setShowMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)

        //Cleanup
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        };
    }, [ref])

    return {showMenu, setShowMenu, ref}
} 