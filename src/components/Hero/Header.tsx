import { BallsAnimation } from "./BallsAnimation"
import styles from './index.module.scss';
import { AnimatedText } from 'components';
import { useEffect, useState } from "react";

export const Header = () => {

    const [typingAnimation, setTypingAnimation] = useState(true);

    useEffect(() => {

        return () => {
            setTimeout(() => {
                setTypingAnimation(false);
            }, 3500);
        }
    }, [])

    return (
        <header className={styles.hero} >

            <div className={styles.content} >
                <span className={`${typingAnimation && styles.animate}`} >Hi, I&apos;m</span>

                <div className={styles.content__nameContainer} >
                    <h1 className={styles.name} >
                        Ricardo
                        <span className={styles.lastName} >Sandoval</span>
                    </h1>
                </div>
                <h2>
                    Web Developer
                </h2>
                <p className={styles.description} >
                    Freelancer, full-stack/hard front-end developer and UX/UI passionate. My motto? <strong>Functionality and good looking should always be together</strong>
                </p>
            </div>

            <BallsAnimation />

        </header>
    )
}
