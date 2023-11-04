import React from 'react';
import styles from './styles_text_gradient.module.css'

const TextGradient = () => {
    return (
        <>
            <div className={styles.gradient}>Градиент</div>
            <div className={styles.gradient_metal}>Металл</div>
        </>

    );
};

export default TextGradient;