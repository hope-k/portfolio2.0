
export const pageTransition = {
    initial: {
        opacity: 0,
    },
    whileInView: {
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: 'circOut'
        }
    }
}