import React from 'react';
import { motion } from 'framer-motion';

const StepperAnimation = () => {
    return (
        <div>
            <motion.div
                initial={{ width: '0%', borderColor: 'transparent' }}
                whileInView={{ width: '15rem', borderColor: 'teal', backgroundColor: 'teal' }}
                transition={{ duration: 1 }}
                className="h-2 relative"
            >
                <motion.div
                    initial={{ opacity: 0, pathLength: 0 }}
                    whileInView={{ opacity: 1, pathLength: 1, transition: { duration: 5 } }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: '-4px',
                        left: 'calc(100% - 4px)',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: '2px solid red',
                    }}
                    className="border-solid"
                />
            </motion.div>
        </div>
    );
};

export default StepperAnimation;
