import styles from './Footer.module.css'

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer (){
    return (

<div className={styles.footer}>

        <ul>
        <li><a href='https://github.com/LucasVidal94'><FaGithub size={35} /></a></li>
        <li><a href='https://linkedin.com/in/lucasvidal94'> <FaLinkedin size={35} /> </a></li>
        <p>Vidal.lucasvidal94@gmail.com</p>
        <p>Lucas Vidal © 2024</p>
      </ul>

      </div>
    
    )
    
    
    }
    
    export default Footer