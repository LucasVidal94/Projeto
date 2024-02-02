import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'



function Navbar (){



return (
 <div className ={styles.navbar}>
<ul>
  <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
  <li><Nav.Link href='#Skills'>Habilidades </Nav.Link></li>
  <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
</ul>
<ul>
  <li><a href='https://github.com/LucasVidal94'><FaGithub size={35} /></a></li>
  <li><a href='https://linkedin.com/in/lucasvidal94'> <FaLinkedin size={35} /> </a></li>
  
</ul>


 </div>

)


}

export default Navbar