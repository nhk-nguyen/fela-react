import React from 'react';
import styles from './HelloWorld.module.scss';

export default function HelloWorld({style1 = true}) {
    return (
        <div className={style1 ? styles.hello : styles.hello2}>Hello World !</div>
    )
}