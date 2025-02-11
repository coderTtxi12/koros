import { useEffect, useRef, useState } from "react";

function useVantaBirds(config) {

    // Store the Vanta effect instance
    const [vantaEffect, setVantaEffect] = useState(null);

    // Reference to the DOM element where the effect will be applied
    const vantaRef = useRef(null);

    useEffect(() => {

        // Initialize the effect only if it doesn't exist and Vanta is loaded
        if (!vantaEffect && window.VANTA) {
            setVantaEffect(
                window.VANTA.BIRDS({
                    el: vantaRef.current,
                    ...config,
                })
            );
        }

        // Cleanup function to destroy the effect when component unmounts
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect, config]);

    return { vantaRef };
}

export default useVantaBirds;
