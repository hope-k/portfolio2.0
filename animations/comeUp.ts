export const comeUp = {
    initial: {
        opacity: 0,
        y: 200
    },
    whileInView: {
        opacity: 1,
        
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 20,
            mass: 0.2,
        }

    }
}