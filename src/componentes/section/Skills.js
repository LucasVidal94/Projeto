import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'



function Skills (){
    return (

     <div className={styles.skill} id='Skills'>
        
        <h1>Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
        <div>


         <img className={styles.js}  src={javascript}/>
         <img className={styles.ht} src={html}/> 
         <img className={styles.cs} src={css}/> 
         <img className={styles.rea} src={react}/>    
        </div>
        
        </div>
    
    )
    
    
    }
    
    export default Skills