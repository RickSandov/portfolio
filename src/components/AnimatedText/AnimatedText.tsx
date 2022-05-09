import { animate } from 'animations';
import { Variants, motion } from 'framer-motion';
import { FC, useMemo, useRef } from 'react';
import { Char } from './Char';

import styles from './index.module.scss';

interface Props {
    text: string;
}

const container: Variants = {
    onscreen: {
        // opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: .1,
            delay: .4
            // staggerDirection: -1
        }
    }
}

const cardVariants: Variants = {
    offscreen: {
        x: '100%',
        rotate: 50,
        scale: 0
    },
    onscreen: {
        x: ['-100%', '0%'],
        rotate: [-5, 0],
        scale: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.2,
        }
    },
    hover: { scale: 1.2, rotate: 20, cursor: 'grab' },
    tap: {
        cursor: 'grabbing',
        scale: 1.2,
        rotate: 0,
        // borderRadius: "100%"
    }
};

export const AnimatedText: FC<Props> = ({ text }) => {

    // const textContainer = useRef(null);
    const chars = useMemo(() => text.split(''), [text]);

    return (
        <motion.div
            className={`${styles.textContainer} ${styles.cursor}`}
            variants={container}
            initial="offscreen"
            // whileInView='onscreen'
            animate="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            onAnimationComplete={() => {
                console.log('Animation complete');
            }}
        >

            {
                chars.map((char, index) => (
                    <motion.span
                        variants={cardVariants}
                        key={index}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    // dragElastic={.8}
                    // dragMomentum={true}
                    // onDrag={e => {
                    //     console.log(e)
                    // }}
                    // whileHover='hover'
                    // whileTap='tap'
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                ))
            }
        </motion.div >
    )
}