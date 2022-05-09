import { animate } from 'animations';
import React, { FC } from 'react'
import { motion } from 'framer-motion';

interface Props {
    char: string;
}

export const Char: FC<Props> = ({ char }) => {

    const item = {
        visible: {
            ...animate('fadeIn', true).animate,
            transition: {
                duration: .6
            },
            initial: {
                x: 0,
                y: 0
            }
        }
    };

    return (
        <motion.span
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
            }}
            variants={item}
        >
            {char === ' ' ? <span>&nbsp;</span> : char}
        </motion.span>
    )
}
