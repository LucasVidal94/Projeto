import ButtonB from '../elements/ButtonB'
import ButtonC from '../elements/ButtonC'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../image/projects/lpdnc.svg'
import tabuada from '../../image/projects/tabuada.svg'
import arquiteto from '../../image/projects/arquiteto.svg'
import apicep from '../../image/projects/apicep.svg'






function Projects (){
    return (
     <div className={styles.projects} id='Projects'>  
     
      <h1> Projetos</h1>
       <Card 
       img={lpdnc}
       tittle='Landing Page DNC'
       tech='HTML, CSS e JavaScript'
       description='Desenvolvimento base de uma Landing Page do curso de tecnologia da DNC.'
       repo='https://github.com/LucasVidal94/Projeto-landing-page'
       site='https://projeto-lucas-dnc.netlify.app/'

       />


       <Card 
       img={tabuada}
       tittle='Tabuada'
       tech='HTML, CSS e JavaScript'
       description='Desenvolvimento de uma tabuada utilizando JavaScript.'
       repo='https://github.com/LucasVidal94/tabuada/tree/main'
       site='https://tabuada-lucas.netlify.app/'
       />


       <Card

img={arquiteto}
tittle='Lp-arquitetura'
tech='HTML, CSS e JavaScript'
description='Desenvolvimento de uma Landing Page de arquitetura, com preenchimento de dados e acesso aos preenchimentos. Link da planilha no respositorio do projeto.'
repo='https://github.com/LucasVidal94/Atividade-DNC'
site='https://atividadednc.netlify.app/ '

/>
       
<Card
 img={apicep}
 tittle='API de endereço'
 tech='HTML, CSS, JavaScript, Bootstrap'
 description='Projeto realizado, utilizando API de consumo VIACEP e OPEN-METEO, para saber o endereço atraves do CEP e utlizando a coordenada para a previsão exata do tempo no local.'
 repo='https://github.com/LucasVidal94/dnc-weather'
 site='https://dnc-weather-delta.vercel.app/'
 
/>       


<div className={styles.buttonb}>
    <ButtonC  text ='Ver repositorio completo' link='https://github.com/LucasVidal94'/>     
     
     </div>
     </div>
    
    )
    
    
    }
    
    export default Projects