import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'
import ButtonB from './elements/ButtonB'


function Presentation (){
    return (
     <div className={styles.presentation} id='Presentation'> 
     <h4><strong> Bem-vindo ao meu Portfólio </strong></h4>
     <h1> Olá, eu sou Lucas Vidal!</h1>
     <p>
      Sou estudante de Engenharia da Computação com conclusão em 2025 <br/>
      e busco transição de carreira para oportunidades de estágio na área de tecnologia.<br/>
      Tenho comprometimento com minhas tarefas e sempre busco  me aperfeiçoar ao máximo. <br/>
      Busco por uma empresa onde eu possa além de me desenvolver,<br/>
      contribuir com a organização e com as entregas de metas e desafios estabelecidos.<br/>
      Conhecimento em: Lógica de programação, html, css, javascript, bootstrat, react e  pacote office. 
      </p>

      <ButtonA link='https://github.com/LucasVidal94' text='Conecte-se comigo!!!'/>
      
     </div>
    
    )
    
    
    }
    
    export default Presentation