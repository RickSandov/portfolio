import { Navbar } from 'components';
import { FC } from 'react';

import styles from './index.module.scss';
import { motion, Variants } from 'framer-motion';

type Props = {
    children?: React.ReactNode
};

const variants: Variants = {
    onDrag: {
        // transform: rotate(90deg) translateY(-50%);
        rotate: 90,
        y: '-50%',
        cursor: 'grabbing',
    },
    initial: {
        rotate: 90,
        y: '-50%',
        cursor: 'grab',
    },

}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.layout} >
            <Navbar />
            {children}
            <motion.div
                className={styles.email}
                variants={variants}
                drag
                dragConstraints={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }}
                dragElastic={0.2}
                transition={{
                    type: 'spring',
                    duration: 0.5,
                }}
                // style={{
                //     rotate: 90,
                //     y: '-50%',
                // }}
                initial='initial'
                whileDrag='onDrag'
                animate='initial'
            >
                <span>
                    hello@<strong>ricksandov.com</strong>
                </span>
            </motion.div>
        </div>
    )
}
