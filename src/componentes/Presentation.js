import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'
import ButtonB from './elements/ButtonB'
import{useEffect, useState} from 'react'


function Presentation (){
const [text, setText]= useState ('');
const toRotate = ['Lucas Vidal!', 'estudante de Desenvolvimento' ];
const [loop, setLoop] = useState (0);
const [isDeleting, setIsDeleting]= useState (false);
const period = 100;
const [delta, setDelta]= useState (100);

useEffect (()=>{
  let ticker = setInterval (()=>{

    toType()
  }, delta)


  return ()=>{clearInterval(ticker)}

}, [text])

const toType =() => {
let i  = loop % toRotate.length;
let fullText = toRotate [i];
let updateText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

setText (updateText);


if(!isDeleting && updateText === fullText){

    setIsDeleting(true);
    setDelta (period);
} else if (isDeleting && updateText === '') {
    setIsDeleting(false);
    setDelta(period);
    setLoop (loop+1)


}

}





    return (
     <div className={styles.presentation} id='Presentation'> 
     <h4><strong> Bem-vindo ao meu Portfólio </strong></h4>
     <h1> Olá, eu sou {text}</h1>
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