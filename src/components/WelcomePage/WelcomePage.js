import {useState} from 'react';
import styles from './WelcomePage.module.css'

const WelcomePage = ({setWelcome}) => {
    return (<div className={styles.welcomeBox}>
        <h1>WELCOME TO THE MUSEUM</h1>
        <button onClick={()=>setWelcome(true)}>Enter!</button>
    </div>)
}

export default WelcomePage;