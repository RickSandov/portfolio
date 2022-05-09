import styles from './index.module.scss';
import { FC } from 'react';

// Component
export const BallsAnimation: FC = () => {

    return (
        <div className={styles.balls}>

            <div className={styles.mainBall} />
            <div className={styles.halfMoon}>
                <div className={styles.bouncingBall} />
            </div>

        </div>
    )
}
