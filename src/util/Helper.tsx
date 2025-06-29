import { useEffect, useState } from "react";

export function IsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    const MOBILE_WIDTH = 1150;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE_WIDTH);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial state

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
}