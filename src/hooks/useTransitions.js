import { useInView } from "react-intersection-observer";

const useTransitions = () => {
    const fadeTransition = useInView({ triggerOnce: false });
    const slideTransition = useInView({ triggerOnce: false });
    const growTransition = useInView({ triggerOnce: false });
    const zoomTransition = useInView({ triggerOnce: false });
    const collapseTransition = useInView({ triggerOnce: false });
    const slideUpTransition = useInView({
        triggerOnce: false,
        threshold: 0.2
    });
    const fadeOnceTransition = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return {
        fade: { ref: fadeTransition.ref, inView: fadeTransition.inView },
        slide: { ref: slideTransition.ref, inView: slideTransition.inView },
        grow: { ref: growTransition.ref, inView: growTransition.inView },
        zoom: { ref: zoomTransition.ref, inView: zoomTransition.inView },
        collapse: { ref: collapseTransition.ref, inView: collapseTransition.inView },
        slideUp: { ref: slideUpTransition.ref, inView: slideUpTransition.inView },
        fadeOnce: { ref: fadeOnceTransition.ref, inView: fadeOnceTransition.inView }
    };
};

export default useTransitions;

