export const fadeIn = {
    initial: { y: -20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: 0.3 },
};
export const zoomIn = {
    initial: { scale: 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, type: 'spring', stiffness: 100 },
};
